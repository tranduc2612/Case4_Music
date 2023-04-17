function renderInfo() {
	clearTimeout(idSetTimeOutSlider);
	$.ajax({
		type: "GET",
		url: `${URL_BASE}/list-accounts/get-account/${JSON.parse(
			localStorage.getItem("ID")
		)}`,
		dataType: "json",
		contentType: "application/json;charset=utf-8",
		success: function (data) {
			console.log(data);
			$(".app__container")
				.html(`	<div class="app__profile d-flex flex-column align-items-center mt-5">
	<div class="profile__header d-flex align-items-center flex-column mb-4">
		<img class="header__avatar-profile" src="${data.avatar}" alt="">
		<h1 class="header__avatar-name">${data.name}</h1>
	</div>

	<div class="profile__content mt-5">
		<h3 class="profile__content-title">Cập nhật thông tin cá nhân</h3>
		<form>
			<div class="form__box d-flex flex-column mb-4">
				<label class="input_profile-title" for="phone_profile">Số điện thoại</label>
				<input class="input_profile" value="${data.phone}" id="phone_profile" type="text" name="phone">
			</div>

			<div class="form__box d-flex flex-column mb-5">
				<label class="input_profile-title" for="name_profile">Tên</label>
				<input class="input_profile" id="name_profile" value="${data.name}" type="text" name="name">
			</div>

			<div class="form__box d-flex flex-column mb-5">
				<label class="input_profile-title" for="password_profile">Mật khẩu</label>
				<input class="input_profile" id="password_profile" type="password" name="password">
			</div>

			<button class="btn__update-profile">Cập nhật thông tin</button>
		</form>
	</div>
</div>
	`);

			$(".btn__update-profile").on("click", function (e) {
				e.preventDefault();
				const a = {
					name: $("[name=name]").val(),
					password: $("[name=password]").val(),
					phone: $("[name=phone]").val(),
				};
				console.log(a);
				$.ajax({
					type: "PATCH",
					url: `${URL_BASE}/list-accounts/update-account/${JSON.parse(
						localStorage.getItem("ID")
					)}`,
					dataType: "json",
					data: JSON.stringify({
						name: $("[name=name]").val(),
						password: $("[name=password]").val(),
						phone: $("[name=phone]").val(),
					}),
					contentType: "application/json;charset=utf-8",
					success: function (data) {
						if (data.type == "Success") {
							Swal.fire({
								position: "center",
								icon: "success",
								title: data.message,
								showConfirmButton: true,
							}).then((result) => {
								if (result.isConfirmed) {
									console.log(data);
									$("[name=name]").val(data._doc.name);
									$("[name=password]").val("");
									$("[name=phone]").val(data._doc.phone);
									console.log($(".header__avatar-name"));
									$(".header__avatar-name").html(data._doc.name);
									nameLocal = data._doc.name;
									localStorage.setItem("NAME", JSON.stringify(data._doc.name));
								}
							});
						} else {
							Swal.fire({
								position: "center",
								icon: "error",
								title: data.message,
								showConfirmButton: true,
							}).then((result) => {
								if (result.isConfirmed) {
									console.log("Err");
								}
							});
						}
					},
					error: function (err) {
						console.log(err);
					},
				});
			});
		},
		error: function (err) {
			console.log(err);
		},
	});
}
