let currentSong;
let isPlay = false;

function getListSong() {
	return $.ajax({
		type: "GET",
		url: "http://localhost:3000/song-demo",
		headers: {
			"Content-Type": "application/json",
		},
		success: (songList) => {
			console.log(songList);
			let html = "";
			songList.forEach((song) => {
				let authors = "";
				song.singer.forEach((author, index) => {
					if (song.singer.length - 1 == index) {
						authors += `<a href="#">${author}</a>`;
					} else {
						authors += `<a href="#">${author}, </a>`;
					}
				});
				html += `
                <li class="content__home-music-item d-flex justify-content-between position-relative" pathSong="${song.path}">
                                                            <div class="content__home-music-item-info d-flex">
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
                                                                            class="layout-fade position-absolute"
                                                                            style="
                                                                                background: rgba(0, 0, 0, 0.5);
                                                                                width: 100%;
                                                                                height: 100%;
                                                                            "
                                                                        ></div>
                                                                        <div
                                                                            class="thumb--animate-img position-absolute"
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
			$(".content__home-music-list").innerHTML = html;
		},
	});
}

getListSong()
	.then((dataSong) => {
		handleSong(dataSong);
	})
	.catch((err) => {});

function handleSong(dataSong) {
	const audio = $("#audio");
	const listSong = $$(".content__home-music-item");
	const playIcon = $(".icon-play");
	const pauseIcon = $(".icon-pause");

	// select song
	for (let i = 0; i < listSong.length - 1; i++) {
		listSong[i].addEventListener("click", () => {
			const thumbCD = $(".cd-thumb");
			const titlePlayer = $(".player__music-title");
			thumbCD.style.backgroundImage = `url(${dataSong[i].image})`;
			titlePlayer.innerHTML = dataSong[i].name;
			currentSong = i;
			audio.src = dataSong[i].path;
			playIcon.classList.add("d-none");
			pauseIcon.classList.remove("d-none");
			isPlay = true;
			audio.play();
		});
	}
	// pauseSong
	pauseIcon.addEventListener("click", () => {
		playIcon.classList.remove("d-none");
		pauseIcon.classList.add("d-none");
		audio.pause();
	});

	// continuesSong
	playIcon.addEventListener("click", () => {
		playIcon.classList.add("d-none");
		pauseIcon.classList.remove("d-none");
		audio.play();
	});

	//process
}
