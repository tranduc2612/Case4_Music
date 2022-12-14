let currentSong;
let isPlay = false;
let isRepeat = false;
function getListSong() {
	return $.ajax({
		type: "GET",
		url: `${URL_BASE}/list-songs/song`,
		headers: {
			"Content-Type": "application/json",
			Authorization:
				"Bearer " + JSON.parse(localStorage.getItem("ACCESS_TOKEN")),
		},
		success: (songList) => {
			console.log(songList);
			let html = "";
			songList.forEach((song, index) => {
				let authors = "";
				song.singer.forEach((author, index) => {
					if (song.singer.length - 1 == index) {
						authors += `<a href="#">${author}</a>`;
					} else {
						authors += `<a href="#">${author}, </a>`;
					}
				});
				html += `
                <li class="content__home-music-item d-flex justify-content-between position-relative align-items-center" pathSong="${song.path}" id=${index}>
                                                            <div class="content__home-music-item-info d-flex ms-2">
                                                                <div class="musiclist__info-img position-relative"
                                                                    style="
                                                                        background: url('${song.image}')
                                                                            no-repeat center center / cover;
                                                                        width: 50px;
                                                                        height: 50px;
                                                                    "
                                                                >
                                                                    <div class="thumb--animate">
                                                                        <div
                                                                            class="layout-fade position-absolute d-none"
                                                                            style="
                                                                                background: rgba(0, 0, 0, 0.5);
                                                                                width: 100%;
                                                                                height: 100%;
                                                                            "
                                                                        ></div>
                                                                        <div
                                                                            class="thumb--animate-img position-absolute d-none"
                                                                            style="
                                                                                background: url('../../public/img/SongActiveAnimation/icon-playing.gif')
                                                                                    no-repeat 50% / contain;
                                                                                width: 40%;
                                                                                height: 40%;
                                                                                z-index: 10;
                                                                            "
                                                                        ></div>
    
                                                                        <div
                                                                            class="play-song--actions"
                                                                            style="
                                                                                width: 100%;
                                                                                height: 100%;
                                                                                z-index: 100;
                                                                            "
                                                                        >
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="23"
                                                                                height="23"
                                                                                fill="currentColor"
                                                                                class="bi bi-play-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path
                                                                                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
    
                                                                <div
                                                                    class="musiclist__info-body d-flex flex-column"
                                                                >
                                                                    <span class="musiclist__info-body-title"
                                                                        >${song.name}</span
                                                                    >
                                                                    <span class="musiclist__info-body-author">
                                                                        ${authors}
                                                                    </span>
                                                                </div>
                                                            </div>
    
                                                            <span class="content__home-music-item-time position-absolute">
                                                                04:30
                                                            </span>
    
                                                            <div
                                                                class="content__home-music-item-option d-flex align-items-center me-4"
                                                            >
                                                                <div
                                                                    class="musiclist__option-icon musiclist__option-heart me-2"
                                                                >
                                                                    <svg
                                                                        class="musiclist__option-heart-icon"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="16"
                                                                        height="16"
                                                                        fill="currentColor"
                                                                        class="bi bi-heart-fill"
                                                                        viewBox="0 0 16 16"
                                                                    >
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                                                        />
                                                                    </svg>
                                                                </div>
    
                                                                <div
                                                                    class="musiclist__option-icon musiclist__option-three-dot ms-2"
                                                                >
                                                                    <svg
                                                                        class="musiclist__option-three-dot-icon"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="20"
                                                                        height="20"
                                                                        fill="currentColor"
                                                                        class="bi bi-three-dots"
                                                                        viewBox="0 0 16 16"
                                                                    >
                                                                        <path
                                                                            d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </li>
                `;
			});
			$(".content__home-music-list").html(html);
		},
	});
}

getListSong()
	.then((dataSong) => {
		handleSong(dataSong);
	})
	.catch((err) => {});

function handleSong(dataSong) {
	const audio = document.querySelector("#audio");
	const listSong = $(".content__home-music-item");
	const playIcon = $(".icon-play");
	const pauseIcon = $(".icon-pause");
	const fadeImgSong = $(".layout-fade");
	const thumbAnimation = $(".thumb--animate-img");
	const playSongIcon = $(".play-song--actions");
	const process = $(".progress");
	const processCursor = $(".progress__track-update");
	const trackTime = $(".tracktime");
	const durationTime = $(".durationtime");

	// select song
	listSong.click((e) => {
		const indexCurrentSong = e.currentTarget.attributes.id.value;
		playSong(indexCurrentSong);
	});

	function playSong(i) {
		if (currentSong != undefined) {
			listSong[currentSong].classList.remove("active");
			fadeImgSong[currentSong].classList.add("d-none");
			thumbAnimation[currentSong].classList.add("d-none");
			playSongIcon[currentSong].classList.remove("d-none");
		}
		listSong[i].classList.add("active");
		fadeImgSong[i].classList.remove("d-none");
		thumbAnimation[i].classList.remove("d-none");
		playSongIcon[i].classList.add("d-none");

		const thumbCD = $(".cd-thumb");
		const titlePlayer = $(".player__music-title");
		const authorPlayer = $(".player__music-author");
		const authorPlayList = $(".musiclist__info-body-author");
		thumbCD.css("background-image", `url(${dataSong[i].image})`);
		titlePlayer.html(dataSong[i].name);
		authorPlayer.html(authorPlayList[i].innerHTML);

		currentSong = i;
		audio.src = dataSong[i].path;
		playIcon.addClass("d-none");
		pauseIcon.removeClass("d-none");
		isPlay = true;
		audio.play();
	}
	// pauseSong
	pauseIcon.click((e) => {
		playIcon.removeClass("d-none");
		pauseIcon.addClass("d-none");
		audio.pause();
	});

	// continuesSong
	playIcon.click((e) => {
		playIcon.addClass("d-none");
		pauseIcon.removeClass("d-none");
		audio.play();
	});

	// next song
	const btnNextSong = $(".btn-next");
	btnNextSong.click((e) => {
		const indexNextSong = currentSong + 1;
		if (indexNextSong >= dataSong.length) {
			return;
		}
		playSong(indexNextSong);
	});

	// prev song
	const btnPrevSong = $(".btn-prev");
	btnPrevSong.click((e) => {
		const indexPrevSong = currentSong - 1;
		if (indexPrevSong < 0) {
			return;
		}
		playSong(indexPrevSong);
	});

	//repeat song

	const btnRepeatSong = $(".btn-repeat");
	btnRepeatSong.click((e) => {
		btnRepeatSong.classList.toggle("active");
		if (btnRepeatSong.classList.contains("active")) {
			isRepeat = true;
		} else {
			isRepeat = false;
		}
	});

	audio.onended = function () {
		if (isRepeat) {
			audio.play();
		} else {
			btnNextSong.click();
		}
	};

	//process

	audio.ontimeupdate = function () {
		if (audio.duration) {
			const processPercent = Math.floor(
				(audio.currentTime / audio.duration) * 100
			);
			let minutesCur = Math.floor(audio.currentTime / 60);
			let secondsCur = Math.floor(audio.currentTime - minutesCur * 60);

			let minutesEnd = Math.floor(audio.duration / 60);
			let secondsEnd = Math.floor(audio.duration - minutesEnd * 60);

			if (secondsEnd < 10) {
				secondsEnd = "0" + secondsEnd;
			}
			if (minutesEnd < 10) {
				minutesEnd = "0" + minutesEnd;
			}

			if (secondsCur < 10) {
				secondsCur = "0" + secondsCur;
			}
			if (minutesCur < 10) {
				minutesCur = "0" + minutesCur;
			}

			const timeEnd = `${minutesEnd}:${secondsEnd}`;
			const timeCur = `${minutesCur}:${secondsCur}`;
			durationTime.html(timeEnd);
			trackTime.html(timeCur);
			process.value = processPercent;
			processCursor.css("width", processPercent + "%");
		}
	};

	// rewind music
	process.on("change", (e) => {
		const seekTime = (audio.duration / 100) * e.target.value;
		audio.currentTime = seekTime;
	});
}
