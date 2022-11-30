const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const closeBtn = $$("#close__btn-auth");
const formAuth = $(".app__authetication");
const avatarUser = $("#header-avatar");
const formLogin = $(".login__form");
const formRegister = $(".register__form");
const btnWitchLogin = $(".btn__witch-Login");
const btnWitchRegister = $(".btn__witch-Register");

const app = {
	renderHome: function () {
        
    },

	handleEvent: function () {
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
	},

	start: function () {
		this.handleEvent();
	},
};

app.start();
