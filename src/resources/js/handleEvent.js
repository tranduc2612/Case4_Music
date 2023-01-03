const URL_BASE = "http://localhost:3000";
// const closeBtn = $(".wrapper__closebtn");
// const formAuth = $(".app__authetication");
// const avatarUser = $("#header-avatar");
// const formLogin = $(".login__form");
// const formRegister = $(".register__form");
// const btnWitchLogin = $(".btn__witch-Login");
// const btnWitchRegister = $(".btn__witch-Register");

// closeBtn.click(() => {
// 	formAuth.addClass("d-none");
// 	formLogin.removeClass("d-none");
// 	formRegister.addClass("d-none");
// });

// // avatarUser.addEventListener("click", (e) => {
// // });

// avatarUser.click(() => {
// 	formAuth.removeClass("d-none");
// 	formLogin.removeClass("d-none");
// });

// // btnWitchLogin.addEventListener("click", (e) => {});

// btnWitchLogin.click((e) => {
// 	e.preventDefault();
// 	formLogin.toggleClass("d-none");
// 	formRegister.toggleClass("d-none");
// });

// // btnWitchRegister.addEventListener("click", (e) => {});

// btnWitchRegister.click((e) => {
// 	e.preventDefault();
// 	formRegister.toggleClass("d-none");
// 	formLogin.toggleClass("d-none");
// });

// // slide
// let imgIndex = 2;
// const slideImgs = document.querySelectorAll(".content__home-music-slide-item");
// function slideShow() {
// 	const slideImgFirst = document.querySelector(
// 		".content__home-music-slide-item.first"
// 	);
// 	const slideImgSecond = document.querySelector(
// 		".content__home-music-slide-item.second"
// 	);
// 	const slideImgThird = slideImgs[imgIndex];
// 	const slideImgFourth =
// 		slideImgs[imgIndex === slideImgs.length - 1 ? 0 : imgIndex + 1];
// 	slideImgFourth.classList.replace("fourth", "third");
// 	slideImgThird.classList.replace("third", "second");
// 	slideImgSecond.classList.replace("second", "first");
// 	slideImgFirst.classList.replace("first", "fourth");
// 	imgIndex++;
// 	if (imgIndex >= slideImgs.length) {
// 		//imgIndex: 0-7, slideImgs.length: 8
// 		imgIndex = 0;
// 	}

// 	setTimeout(slideShow, 2000);
// }

// slideShow();
