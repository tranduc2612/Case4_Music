const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const closeBtn = $$("#close__btn-auth");
const formAuth = $(".app__authetication");
const avatarUser = $("#header-avatar");
const formLogin = $(".login__form");
const formRegister = $(".register__form");
const btnWitchLogin = $(".btn__witch-Login");
const btnWitchRegister = $(".btn__witch-Register");

closeBtn.forEach((e) => {
	e.addEventListener("click", (e) => {
		formAuth.classList.add("d-none");
		formLogin.classList.remove("d-none");
		formRegister.classList.add("d-none");
	});
});

avatarUser.addEventListener("click", (e) => {
	formAuth.classList.remove("d-none");
});

btnWitchLogin.addEventListener("click", (e) => {
	e.preventDefault();
	formLogin.classList.toggle("d-none");
	formRegister.classList.toggle("d-none");
});

btnWitchRegister.addEventListener("click", (e) => {
	e.preventDefault();
	formRegister.classList.toggle("d-none");
	formLogin.classList.toggle("d-none");
});

// slide
let imgIndex = 2;
const slideImgs = document.querySelectorAll(".content__home-music-slide-item");
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
