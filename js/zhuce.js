var aDiv=document.querySelector('.layout form>.d1');
var bDiv=document.querySelector('.layout>.xiala');
aDiv.onclick=function(){
	bDiv.style.display='block';
}
bDiv.onclick=function(){
	bDiv.style.display='none';
}






$(function(){
		$('.layout form>div>.ip1').blur(function(){
			//获取值
			var value=$('.layout form>div>.ip1').val();
			//声明规则
			var reg=/^[\d]{11}$/;	
			if(reg.test(value)){
				$('.layout form>.p1').html('');
			}else{
			//显示用户名不正确
				$('.layout form>.p1').html('<img src="./images/gth.png">手机号码格式错误');
			}
			if (value=='') {
				$('.layout form>.p1').html('<img src="./images/gth.png">请输入手机号码');
			}
			$('.layout form>div>.ip1').css('borderColor','#ff6700');
		});


		$('.layout form>div>.ip2').blur(function(){
				$('.layout form>.p2').html('<img src="./images/gth.png">请输入验证码');
				$('.layout form>div>.ip2').css('borderColor','#ff6700');
		});

	});