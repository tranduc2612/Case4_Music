const URL_BASE = "http://localhost:3000";
let tokenLocal = localStorage.getItem("ACCESS_TOKEN");
let avatarLocal = JSON.parse(localStorage.getItem("AVATAR"));
let nameLocal = JSON.parse(localStorage.getItem("NAME"));
let currentSongLocal =
	JSON.parse(localStorage.getItem("ID_CURRENT_SONG")) || undefined;
function Authored(avatar, name) {
	$(".header__nav-list")
		.html(`<li id="header-setting" onclick="renderInfo()" class="header__nav-item">
	<div class="header__nav-btn">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="25"
			height="25"
			fill="currentColor"
			class="bi bi-gear-fill header__nav-btn-icon"
			viewBox="0 0 16 16"
		>
			<path
				d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
			/>
		</svg>
	</div>
</li>

<li id="header-avatar" class="header__nav-item ms-4">
	<div class="header__nav-btn btn-setting">
		<!-- <svg
			xmlns="http://www.w3.org/2000/svg"
			width="25"
			height="25"
			fill="currentColor"
			class="bi bi-person-circle header__nav-btn-icon"
			viewBox="0 0 16 16"
		>
			<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
			<path
				fill-rule="evenodd"
				d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
			/>
		</svg> -->

		<img class="avatar__navbar" src="${avatar}" width="40" height="40" />
		<a class="btn-logout" style="position:absolute; top:120%;right:0;font-size:2rem;width:80px" href="#">Log out</a>
	</div>
</li>`);

	$(".btn-logout").on("click", function (e) {
		console.log("hello");
		localStorage.clear();
		location.reload();
	});
}

let currentSong;
let isPlay = false;
let isRepeat = false;
let idSetTimeOutSlider;

function renderHomePage() {
	$(".app__container").html(`<div class="app__container-home">
	<div class="info mt-5">
		
	</div>

	<div
		class="content__navbar d-flex flex-column"
		style="margin-top: 50px"
	>
		<div class="content__navbar">
			<ul class="content__navbar-menu d-flex">
				<li class="content__navbar-item me-3 active">
					<span>Trang chủ</span>
				</li>
				<li class="content__navbar-item ms-3 me-3">
					<span>Bài hát</span>
				</li>
				<li class="content__navbar-item ms-3 me-3">
					<span>Playlist</span>
				</li>
				<li class="content__navbar-item ms-3 me-3">
					<span>Album</span>
				</li>
				<li class="content__navbar-item ms-3 me-3">
					<span>MV</span>
				</li>
				<li class="content__navbar-item ms-3 me-3">
					<span>Nghệ sĩ</span>
				</li>
				<li class="content__navbar-item ms-3">
					<span>Tải lên</span>
				</li>
			</ul>
		</div>
	</div>

	<div class="content__container" style="margin-top: 70px">
		<!-- Home page -->
		<div class="content__home">
			<!-- Song list in home -->
			<div class="content__home-music">
				<div
					class="content__home-music-title d-flex mb-5 align-items-center"
				>
					<h1 class="me-2">Bài hát</h1>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						class="bi bi-chevron-right"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
						/>
					</svg>
				</div>
				<!-- Slider -->
				<div class="row content__home-music-play">
					<div class="content__home-music-slide col-3">
						<div class="content__home-music-slide-show">
							<div class="content__home-music-slide-item first">
								<div
									style="
										background: url('../../public/img/slides/slide1.jpg')
											no-repeat center center / cover;
									"
									class="content__home-music-slide-img"
								></div>
							</div>
							<div class="content__home-music-slide-item second">
								<div
									style="
										background: url('../../public/img/slides/slide2.jpg')
											no-repeat center center / cover;
									"
									class="content__home-music-slide-img"
								></div>
							</div>
							<div class="content__home-music-slide-item third">
								<div
									style="
										background: url('../../public/img/slides/slide3.jpg')
											no-repeat center center / cover;
									"
									class="content__home-music-slide-img"
								></div>
							</div>
							<div class="content__home-music-slide-item fourth">
								<div
									style="
										background: url('../../public/img/slides/slide4.jpg')
											no-repeat center center / cover;
									"
									class="content__home-music-slide-img"
								></div>
							</div>
						</div>
					</div>

					<!-- music list -->
					<div class="content__playlist col-9">
						<ul class="content__home-music-list">
							{render-list-song-BE}
						</ul>
					</div>
				</div>
			</div>

			<!-- Play list  -->
			<div class="content__home-playlist mt-5 mb-5">
				<div class="home__playlist">
					<div
						class="home__playlist-header d-flex justify-content-between"
					>
						<div
							href="#"
							class="home__slider-title d-flex align-items-center"
						>
							<h1 class="me-2">Playlist</h1>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								class="bi bi-chevron-right"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
								/>
							</svg>
						</div>
						<div
							class="container__header-actions d-flex align-items-center"
						>
							<div
								class="container__move-btn btn__back-slide-playList me-2"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="currentColor"
									class="bi bi-chevron-left"
									viewBox="0 0 16 16"
								>
									<path
										fill-rule="evenodd"
										d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
									/>
								</svg>
							</div>
							<div
								class="container__move-btn btn__next-slide-playList ms-2"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="currentColor"
									class="bi bi-chevron-right"
									viewBox="0 0 16 16"
								>
									<path
										fill-rule="evenodd"
										d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
									/>
								</svg>
							</div>
						</div>
					</div>

					<div class="home__playlist-container mt-5">
						<div class="swiper playListSwiper">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<div
										class="home__playlist-create d-flex flex-column align-items-center justify-content-center"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="50"
											height="50"
											fill="currentColor"
											class="bi bi-plus-circle-fill"
											viewBox="0 0 16 16"
										>
											<path
												d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
											/>
										</svg>
										<h2 class="mt-5">Thêm nhạc mới</h2>
									</div>
								</div>

								<div class="swiper-slide flex-column">
									<div class="home__slider-item">
										<div class="home__slider-img">
											<div
												class="home__slider-img-overlay position-absolute justify-content-center align-items-center"
												style="z-index: 100"
											>
												<div
													class="home__slider-img-btn-icon sub__icon me-3"
												>
													<svg
														class="slider__option-heart-icon"
														xmlns="http://www.w3.org/2000/svg"
														width="20"
														height="20"
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
													class="home__slider-img-btn-icon ms-4 me-4"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="50"
														height="50"
														fill="currentColor"
														class="bi bi-play-circle"
														viewBox="0 0 16 16"
													>
														<path
															d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
														/>
														<path
															d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"
														/>
													</svg>
												</div>
												<div
													class="home__slider-img-btn-icon sub__icon ms-3"
												>
													<svg
														class="slider__option-three-dot-icon"
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
											<div
												class="slider__img"
												style="
													background: url('../../public/img/playlists/playlist1.jpg')
														no-repeat center center / cover;
												"
											></div>
										</div>
										<div class="home__slider-info mt-4">
											<h3 class="home__slider-name mb-2">
												V-Pop: The A-List
											</h3>
											<span class="home__slider-subname"
												>Zing mp3</span
											>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Album list -->
			<div class="content__home-albumlist mt-5 mb-5">
				<div class="home__albumlist">
					<div
						class="home__albumlist-header d-flex justify-content-between"
					>
						<div
							href="#"
							class="home__slider-title d-flex align-items-center"
						>
							<h1 class="me-2">Album</h1>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								class="bi bi-chevron-right"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
								/>
							</svg>
						</div>
						<div
							class="container__header-actions d-flex align-items-center"
						>
							<div
								class="container__move-btn btn__back-slide-albumlist me-2"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="currentColor"
									class="bi bi-chevron-left"
									viewBox="0 0 16 16"
								>
									<path
										fill-rule="evenodd"
										d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
									/>
								</svg>
							</div>
							<div
								class="container__move-btn btn__next-slide-albumlist ms-2"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="currentColor"
									class="bi bi-chevron-right"
									viewBox="0 0 16 16"
								>
									<path
										fill-rule="evenodd"
										d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
									/>
								</svg>
							</div>
						</div>
					</div>

					<div class="home__albumlist-container mt-5">
						<div class="swiper albumSwiper">
							<div class="swiper-wrapper">
								<div class="swiper-slide flex-column">
									<div class="home__slider-item">
										<div class="home__slider-img">
											<div
												class="home__slider-img-overlay position-absolute justify-content-center align-items-center"
												style="z-index: 100"
											>
												<div
													class="home__slider-img-btn-icon sub__icon me-3"
												>
													<svg
														class="slider__option-heart-icon"
														xmlns="http://www.w3.org/2000/svg"
														width="20"
														height="20"
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
													class="home__slider-img-btn-icon ms-4 me-4"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="50"
														height="50"
														fill="currentColor"
														class="bi bi-play-circle"
														viewBox="0 0 16 16"
													>
														<path
															d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
														/>
														<path
															d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"
														/>
													</svg>
												</div>
												<div
													class="home__slider-img-btn-icon sub__icon ms-3"
												>
													<svg
														class="slider__option-three-dot-icon"
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
											<div
												class="slider__img"
												style="
													background: url('../../public/img/albums/album1.jpg')
														no-repeat center center / cover;
												"
											></div>
										</div>
										<div class="home__slider-info mt-4">
											<h3 class="home__slider-name mb-2">
												V-Pop: The A-List
											</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Singer list -->
			<div class="content__home-singerlist mt-5">
				<div class="home__singerlist">
					<div
						class="home__singerlist-header d-flex justify-content-between"
					>
						<div
							href="#"
							class="home__slider-title d-flex align-items-center"
						>
							<h1 class="me-2">Singer</h1>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								class="bi bi-chevron-right"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
								/>
							</svg>
						</div>
						<div
							class="container__header-actions d-flex align-items-center"
						>
							<div
								class="container__move-btn btn__back-slide-singerlist me-2"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="currentColor"
									class="bi bi-chevron-left"
									viewBox="0 0 16 16"
								>
									<path
										fill-rule="evenodd"
										d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
									/>
								</svg>
							</div>
							<div
								class="container__move-btn btn__next-slide-singerlist ms-2"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="currentColor"
									class="bi bi-chevron-right"
									viewBox="0 0 16 16"
								>
									<path
										fill-rule="evenodd"
										d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
									/>
								</svg>
							</div>
						</div>
					</div>

					<div class="home__singerlist-container mt-5">
						<div class="swiper singerSwiper"
							style="overflow: initial">
							<div class="swiper-wrapper">
								<div class="swiper-slide flex-column">
									<div class="home__slider-item">
										<div class="home__slider-img">
											<div class="radius__img" style="background: url('../../public/img/singer/artist1.jpg') no-repeat center center / cover;"></div>
										</div>
										<div class="home__slider-info mt-3 text-center d-flex flex-column align-items-center">
											<h3 class="home__slider-name singer mb-1">
												Binz
											</h3>
											<span class="home__slider-subname"
												style="cursor: context-menu">345k Quan tâm</span>
											<button class="button-follow mt-2">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="25"
													height="25"
													fill="currentColor"
													class="bi bi-check"
													viewBox="0 0 16 16"
													style="font-weight: 700"
												>
													<path
														d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
													/>
												</svg>
												Đã quan tâm
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>`);

	if (nameLocal && avatarLocal && tokenLocal) {
		$(".info").html(`<div
		class="info__user d-flex align-items-center flex-column justify-content-center"
		>
		<img
			width="100px"
			height="100px"
			style="border-radius: 50%"
			class="info__user-img"
			src="${avatarLocal}"
			alt=""
		/>
		<span class="info__user-name">${nameLocal}</span>
		</div>`);
		Authored(avatarLocal, nameLocal);
	}

	// slide zom in out
	let imgIndex = 2;
	const slideImgs = document.querySelectorAll(
		".content__home-music-slide-item"
	);
	function slideShowInOut() {
		const slideImgFirst = document.querySelector(
			".content__home-music-slide-item.first"
		);
		const slideImgSecond = document.querySelector(
			".content__home-music-slide-item.second"
		);
		const slideImgThird = slideImgs[imgIndex];
		const slideImgFourth =
			slideImgs[imgIndex === slideImgs.length - 1 ? 0 : imgIndex + 1];
		slideImgFourth.classList.replace("fourth", "third");
		slideImgThird.classList.replace("third", "second");
		slideImgSecond.classList.replace("second", "first");
		slideImgFirst.classList.replace("first", "fourth");
		imgIndex++;
		if (imgIndex >= slideImgs.length) {
			//imgIndex: 0-7, slideImgs.length: 8
			imgIndex = 0;
		}
		clearTimeout(idSetTimeOutSlider);
		idSetTimeOutSlider = setTimeout(slideShowInOut, 2000);
	}

	function slideSlip() {
		const playListSlider = new Swiper(".playListSwiper", {
			slidesPerView: 5,
			spaceBetween: 30,
			slidesPerGroup: 1,
			loop: false,
			loopFillGroupWithBlank: true,
			grabCursor: true,
			keyboard: {
				enabled: true,
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".btn__next-slide-playList",
				prevEl: ".btn__back-slide-playList",
			},
		});

		const alBumSwiper = new Swiper(".albumSwiper", {
			slidesPerView: 5,
			spaceBetween: 30,
			slidesPerGroup: 1,
			loop: false,
			loopFillGroupWithBlank: true,
			grabCursor: true,
			keyboard: {
				enabled: true,
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".btn__next-slide-albumlist",
				prevEl: ".btn__back-slide-albumlist",
			},
		});

		const singerSwiper = new Swiper(".singerSwiper", {
			slidesPerView: 5,
			spaceBetween: 30,
			slidesPerGroup: 1,
			loop: false,
			loopFillGroupWithBlank: true,
			grabCursor: true,
			keyboard: {
				enabled: true,
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".btn__next-slide-singerlist",
				prevEl: ".btn__back-slide-singerlist",
			},
		});
	}

	slideShowInOut();
	slideSlip();

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
					<li class="content__home-music-item d-flex justify-content-between position-relative align-items-center ${
						currentSongLocal == index ? "active" : ""
					}" pathSong="${song.path}" id=${index}>
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
																				class="layout-fade position-absolute ${
																					currentSongLocal == index
																						? ""
																						: "d-none"
																				}"
																				style="
																					background: rgba(0, 0, 0, 0.5);
																					width: 100%;
																					height: 100%;
																				"
																			></div>
																			<div
																				class="thumb--animate-img position-absolute ${
																					currentSongLocal == index
																						? ""
																						: "d-none"
																				}"
																				style="
																					background: url('../../public/img/SongActiveAnimation/icon-playing.gif')
																						no-repeat 50% / contain;
																					width: 40%;
																					height: 40%;
																					z-index: 10;
																				"
																			></div>
		
																			<div
																				class="play-song--actions d-none"
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
				eventSong(songList);
			},
		});
	}

	function eventSong(dataSong) {
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
			currentSongLocal = indexCurrentSong;
			localStorage.setItem("ID_CURRENT_SONG", indexCurrentSong);
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
			currentSongLocal = indexNextSong;
			localStorage.setItem("ID_CURRENT_SONG", currentSongLocal);
			if (indexNextSong >= dataSong.length) {
				return;
			}
			playSong(indexNextSong);
		});

		// prev song
		const btnPrevSong = $(".btn-prev");
		btnPrevSong.click((e) => {
			const indexPrevSong = currentSong - 1;
			currentSongLocal = indexPrevSong;
			localStorage.setItem("ID_CURRENT_SONG", currentSongLocal);
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

	getListSong();
}

renderHomePage();
