if (tokenLocal && avatarLocal && nameLocal) {
	document.querySelector(".app__authetication").remove();
	Authored(avatarLocal, nameLocal);
} else {
	$(".header__nav-list")
		.html(`<li id="header-avatar" class="header__nav-item ms-4">
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

		<img class="avatar__navbar" src="../../public/img/logos/small-logo.svg" alt=""width="40" height="40">
	</div>
</li>`);

	const btnLogin = $(".login-btn");
	const btnRegister = $(".register-btn");
	const closeBtn = $(".wrapper__closebtn");
	const formAuth = $(".app__authetication");
	const avatarUser = $("#header-avatar");
	const formLogin = $(".login__form");
	const formRegister = $(".register__form");
	const btnWitchLogin = $(".btn__witch-Login");
	const btnWitchRegister = $(".btn__witch-Register");

	// authentication
	closeBtn.click(() => {
		formAuth.addClass("d-none");
		formLogin.removeClass("d-none");
		formRegister.addClass("d-none");
	});

	avatarUser.click(() => {
		formAuth.removeClass("d-none");
		formLogin.removeClass("d-none");
	});

	btnWitchLogin.click((e) => {
		e.preventDefault();
		formLogin.toggleClass("d-none");
		formRegister.toggleClass("d-none");
	});

	btnWitchRegister.click((e) => {
		e.preventDefault();
		formRegister.toggleClass("d-none");
		formLogin.toggleClass("d-none");
	});

	btnLogin.on("click", login);

	function login(e) {
		e.preventDefault();
		const phone = $("#phoneInput-login").val();
		const password = $("#passwordInput-login").val();
		const inputInfo = {
			phone,
			password,
		};

		$.ajax({
			type: "POST",
			url: `${URL_BASE}/list-accounts/login`,
			data: JSON.stringify(inputInfo),
			headers: {
				"Content-Type": "application/json",
			},
			success: ({ data }) => {
				console.log(data);
				if (data.isAccess) {
					console.log("Đăng nhập thành công !");
					localStorage.setItem("ACCESS_TOKEN", JSON.stringify(data.token));
					localStorage.setItem("AVATAR", JSON.stringify(data.avatar));
					localStorage.setItem("NAME", JSON.stringify(data.name));
					localStorage.setItem("ID", JSON.stringify(data.idUser));

					tokenLocal = localStorage.getItem("ACCESS_TOKEN");
					avatarLocal = JSON.parse(localStorage.getItem("AVATAR"));
					nameLocal = JSON.parse(localStorage.getItem("NAME"));

					Swal.fire({
						position: "center",
						icon: "success",
						title: data.message,
						showConfirmButton: true,
					}).then((result) => {
						if (result.isConfirmed) {
							document.querySelector(".app__authetication").remove();
							Authored(avatarLocal, nameLocal);

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
						}
					});
				} else {
					if (data.type == "wrong-phone") {
						$(".phone-message-login").text(data.message);
						$(".phone-message-login").css("display", "inline-block");
						$("#phoneInput-login").addClass("error");
					}

					if (data.type == "wrong-password") {
						$(".password-message-login").text(data.message);
						$(".password-message-login").css("display", "inline-block");
						$("#passwordInput-login").addClass("error");
					}
				}
			},
		});
	}

	btnRegister.on("click", function (e) {
		e.preventDefault();
		const phoneInput = $("#phoneInput-register").val();
		const passwordInput = $("#passwordInput-register").val();
		const fullNameInput = $("#fullnameInput-register").val();

		const input = {
			phone: phoneInput,
			password: passwordInput,
			name: fullNameInput,
		};
		$.ajax({
			type: "POST",
			url: `${URL_BASE}/list-accounts/register`,
			data: JSON.stringify(input),
			headers: {
				"Content-Type": "application/json",
			},
			success: function (data) {
				if (data.type == "Error") {
					$(".phone-message-register").text(data.message);
					$(".phone-message-register").css("display", "inline-block");
					$("#phoneInput-register").addClass("error");
				} else {
					localStorage.setItem("ACCESS_TOKEN", JSON.stringify(data.token));
					localStorage.setItem("AVATAR", JSON.stringify(data.avatar));
					localStorage.setItem("NAME", JSON.stringify(data.name));
					localStorage.setItem("ID", JSON.stringify(data.idUser));

					tokenLocal = localStorage.getItem("ACCESS_TOKEN");
					avatarLocal = JSON.parse(localStorage.getItem("AVATAR"));
					nameLocal = JSON.parse(localStorage.getItem("NAME"));
					Swal.fire({
						position: "center",
						icon: "success",
						title: data.message,
						showConfirmButton: true,
					}).then((result) => {
						if (result.isConfirmed) {
							document.querySelector(".app__authetication").remove();
							Authored(avatarLocal, nameLocal);

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
						}
					});
				}
			},
		});
	});
}
