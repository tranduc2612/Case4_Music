const btnLogin = $(".login-btn");
const btnRegister = $(".register-btn");

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
		success: (token) => {
			console.log(token);
			if (token.data.isAccess) {
				console.log("Đăng nhập thành công !");
				localStorage.setItem("ACCESS_TOKEN", JSON.stringify(token.data.token));
				localStorage.setItem("ID_USER", JSON.stringify(token.data.idUser));
				Swal.fire({
					position: "center",
					icon: "success",
					title: token.data.message,
					showConfirmButton: true,
				}).then((result) => {
					if (result.isConfirmed) {
						reloadPage(JSON.parse(localStorage.getItem("ID_USER")));
					}
				});
			} else {
				if (token.data.type == "wrong-phone") {
					$(".phone-message-login").text(token.data.message);
					$(".phone-message-login").css("display", "inline-block");
					$("#phoneInput-login").addClass("error");
				}

				if (token.data.type == "wrong-password") {
					$(".password-message-login").text(token.data.message);
					$(".password-message-login").css("display", "inline-block");
					$("#passwordInput-login").addClass("error");
				}
			}
		},
	});
}

function register(params) {}
