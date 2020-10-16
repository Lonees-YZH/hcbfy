$(function(){
	var reg=/^[a-z0-9_-]{3,16}$/;
	var reg1=/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
	var reg2=/^[a-z0-9_-]{6,18}$/;
	var reg3=/^[a-z0-9_-]{6,18}$/;
	var success_text= " <i class=\"success_icon\"></i> 格式正确 ";
	var success_text1=" <i class=\"success_icon\"></i> 格式正确 ";
	var success_text2=" <i class=\"success_icon\"></i> 格式正确 ";
	var success_text3=" <i class=\"success_icon\"></i> 格式正确 ";
	var error_text=" <i class=\"error_icon\"></i> 请输入3-16之间英文及数字组合的用户名 ";
	var error_text1=" <i class=\"error_icon\"></i> 请输入正确的手机号码";
	var error_text2=" <i class=\"error_icon\"></i> 请输入6-18位之间的有效密码";
	var error_text3=" <i class=\"error_icon\"></i> 请保证两次输入的密码一致";
	regexp("username",reg,success_text,error_text);
	regexp("phone",reg1,success_text1,error_text1);
	regexp("password",reg2,success_text2,error_text2);
//	regexp("password1",reg,success_text3,error_text3);
	
	
	function regexp(ele,reg,success_text,error_text){
		$("#"+ele+"").mouseout(function(){
			var value = $(this).val();
//			var success_text = " <i class=\"success_icon\"></i> 格式正确 ";
//			var error_text = " <i class=\"error_icon\"></i> 格式不正确，请重新输入 ";
			
			if(reg.test(value)){
				$(this).next().addClass("success").removeClass("error").html(success_text);
				
			}else{
				$(this).next().addClass("error").removeClass("success").html(error_text);
			}

		})
	};
		$("#password1").mouseout(function(){
			if(($(this).val()==$("#password").val())&&$(this).val()!=""){
				$(this).next().addClass("success").removeClass("error").html(success_text3);
			}else{
				$(this).next().addClass("error").removeClass("success").html(error_text3);
			}
		});
})


//			if(reg.test(this.val())){
//			$("span").toggleClass(".success");

//			}