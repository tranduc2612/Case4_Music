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
