// 切换二维码
var oDiv=document.querySelectorAll('#banner .dlxx .bt>span');
var aDiv=document.querySelector('#banner .dlxx .footerzc');
var bDiv=document.querySelector('#banner .dlxx .erwm');
var cDiv=[aDiv,bDiv];
for(var i=0;i<oDiv.length;i++){
	oDiv[i].index=i;
	oDiv[i].onclick=function(){
		for(var i=0;i<oDiv.length;i++){
			oDiv[i].style.color='#000';
			cDiv[i].style.display='none';
		}
		this.style.color='#ff6700';
		cDiv[this.index].style.display='block';
	}
}



$(function(){
		$('#banner .dlxx .footerzc form .ip1').blur(function(){
			//获取值
			var value=$('#banner .dlxx .footerzc form .ip1').val();	
			//声明规则
			var reg=/^[\d]{11}$/;	
			if(reg.test(value)){	
				$('#banner .dlxx .footerzc form .p1').html('');	
			}else{
				//显示用户名不正确
				$('#banner .dlxx .footerzc form .p1').html('<img src="./images/gth.png">用户名不正确');
			}
			if (value=='') {
				$('#banner .dlxx .footerzc form .p1').html('<img src="./images/gth.png">请输入用户名');
			}

			$('#banner .dlxx .footerzc form .ip1').css('borderColor','#ff6700');
		});



		$('#banner .dlxx .footerzc form .ip2').blur(function(){
			//获取值
			var value=$('#banner .dlxx .footerzc form .ip2').val();	
			//声明规则
			var reg=/^[\w]{4,}$/;	
			if(reg.test(value)){	
				$('#banner .dlxx .footerzc form .p1').html('');	
			}else{
				//显示用户名不正确
				$('#banner .dlxx .footerzc form .p1').html('<img src="./images/gth.png">密码格式不正确');
			}
			if (value=='') {
				$('#banner .dlxx .footerzc form .p1').html('<img src="./images/gth.png">请输入密码');
			}

			$('#banner .dlxx .footerzc form .ip2').css('borderColor','#ff6700');
		});

	});