function reloadPage(idUser) {
	formAuth.addClass("d-none");
	formLogin.addClass("d-none");
	formRegister.addClass("d-none");

	console.log(idUser);
	$.ajax({
		type: "GET",
		url: `${URL_BASE}/list-accounts/get-account/${idUser}`,
		headers: {
			"Content-Type": "application/json",
		},
		success: (data) => {
			const name = data.name;
			$(".info__user-name").text(name);
		},
	});
}

$(".sidebar__home").on("click", () => {
	console.log($(".app__container"));
	$(".app__container").html(`<div class="app__container-home">
	<div class="info mt-5">
		<div
			class="info__user d-flex align-items-center flex-column justify-content-center"
		>
			<img
				width="100px"
				height="100px"
				style="border-radius: 50%"
				class="info__user-img"
				src="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-1/162016892_2928168047418016_3991487842586818695_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=4K4Asb2gSa8AX89Yf6a&_nc_ht=scontent.fhan14-3.fna&oh=00_AfDYbhr_larYIdG7IcuKCD298ju7RqV0qXSd4-Cam9Wpgg&oe=63A63903"
				alt=""
			/>
			<span class="info__user-name">Trần Minh Đức</span>
		</div>
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

	const closeBtn = $(".wrapper__closebtn");
	const formAuth = $(".app__authetication");
	const avatarUser = $("#header-avatar");
	const formLogin = $(".login__form");
	const formRegister = $(".register__form");
	const btnWitchLogin = $(".btn__witch-Login");
	const btnWitchRegister = $(".btn__witch-Register");

	closeBtn.click(() => {
		formAuth.addClass("d-none");
		formLogin.removeClass("d-none");
		formRegister.addClass("d-none");
	});

	// avatarUser.addEventListener("click", (e) => {
	// });

	avatarUser.click(() => {
		formAuth.removeClass("d-none");
		formLogin.removeClass("d-none");
	});

	// btnWitchLogin.addEventListener("click", (e) => {});

	btnWitchLogin.click((e) => {
		e.preventDefault();
		formLogin.toggleClass("d-none");
		formRegister.toggleClass("d-none");
	});

	// btnWitchRegister.addEventListener("click", (e) => {});

	btnWitchRegister.click((e) => {
		e.preventDefault();
		formRegister.toggleClass("d-none");
		formLogin.toggleClass("d-none");
	});

	// slide
	let imgIndex = 2;
	const slideImgs = document.querySelectorAll(
		".content__home-music-slide-item"
	);
	function slideShow() {
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

		setTimeout(slideShow, 2000);
	}

	slideShow();
});
