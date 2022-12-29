$(document).ready(function(){

	$(document).ready(function(){
		$('#img1').animate({
			height: '835px',
			width: '1460px'
		},1000);
	});
	
				$("#fullName").keypress(function(e){
					var keyCode = e.keyCode || e.which;
					var regex = /^[A-Za-z. ]+$/;
					var isValid = regex.test(String.fromCharCode(keyCode));
					if(!isValid){
						$("#fullNameError").text("Only Charcters are Allowed..");
						$("#fullNameError").css("color", "red");
					} else {
						$("#fullNameError").text("");
					}
					return isValid;
				});

				// $("#email").keypress(function(e){
				// 	var keyCode = e.keyCode || e.which;
				// 	var regex = /^[\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})]+$/;
				// 	var isValid = regex.test(String.fromCharCode(keyCode));
				// 	if(!isValid){
				// 		$("#emailError").text("Only Charcters are Allowed..");
				// 		$("#emailError").css("color", "red");
				// 	} else {
				// 		$("#emailError").text("");
				// 	}
				// 	return isValid;
				// });
				
				$("#phoneNumber").keypress(function(e){
					var keyCode = e.keyCode || e.which;
					var regex = /^[0-9]+$/;
					var isValid = regex.test(String.fromCharCode(keyCode));
					if(!isValid){
						$("#phoneNumberError").text("Only Number Allowed..");
						$("#phoneNumberError").css("color", "red");
					} else {
						$("#phoneNumberError").text("");
					}
					return isValid;
				});

				// $(document).ready(function(){
				// 	$('#img1').animate({
				// 		height: '835px',
				// 		width: '1460px'
				// 	},1000);
				// });
			});