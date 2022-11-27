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
