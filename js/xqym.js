// 搜索栏
$('.header .header2>.bd>form>.ip1').focus(function(){
	$(this).css('border-color','#ff6700');
	$('.header .header2>.bd>form>.ip2').css('border-color','#ff6700');
	$('.header .header2>.bd>form>.text').fadeOut();
	$('.header .header2>.bd>form>.boxtext').css('display','block');
}).blur(function(){
	$(this).css('border-color','#e0e0e0');
	$('.header .header2>.bd>form>.ip2').css('border-color','#e0e0e0');
	$('.header .header2>.bd>form>.text').fadeIn();
	$('.header .header2>.bd>form>.boxtext').css('display','none');
})



//放大镜
	var small=document.querySelector('.content>.small');
	var a=document.querySelector('.content');
	var smalltu=document.querySelector('.content>.small>.smalltu');
	var big=document.querySelector('.content>.big');
	var bigtu=document.querySelector('.content>.big>.bigtu');
	var smallbox=document.querySelector('.content>.small>.smallbox');
	var dian=document.querySelector('.content>.dian');
	var oLi=dian.querySelectorAll('.content>.dian>ul>li');
	//small 鼠标移入
	small.onmousemove=function(ent){
		//smallbox显示
		smallbox.style.display='block';
		//兼容事件对象
		var e=ent||event;	
		//获取鼠标在视窗的位置 pageX pageY
		var x=e.pageX;
		var y=e.pageY;	
		//在small中移动的位置
		var sl=a.offsetLeft;
		var st=a.offsetTop;		
		//给鼠标位置重新赋值
		var x=x-sl;
		var y=y-st;
		//想要鼠标居中 减掉smallbox宽度和高度的一半
		var w=smallbox.offsetWidth/2;
		var h=smallbox.offsetHeight/2;
		//给鼠标坐标重新赋值
		var x=x-w;
		var y=y-h;	
		//边界判断
		//左边
		if(x<=0){
			x=0;
		}	
		//判断右
		//最大值 small的宽度-smallbox的宽度
		var maxLeft=small.offsetWidth-smallbox.offsetWidth;
		if(x>=maxLeft){
			x=maxLeft;	
		}	
		//判断上
		if(y<=0){
			y=0;
		}		
		//判断下
		//移动的最大值=small的高度-smallbox的高度
		var maxTop=small.offsetHeight-smallbox.offsetHeight
		if(y>=maxTop){
			y=maxTop;
		}	
		//给smallbox left top赋值等于鼠标坐标点
		smallbox.style.left=x+'px';
		smallbox.style.top=y+'px';
		//鼠标在小图移动 大图显示
		big.style.display='block';	
		var bLeft=bigtu.offsetWidth*(x/small.offsetWidth);
		var bTop=bigtu.offsetHeight*(y/small.offsetHeight);	
		//移动方向相反是负数 bigtu		
		bigtu.style.left=-bLeft+'px';
		bigtu.style.top=-bTop+'px';		
		//鼠标在小图移动时改变大图的图片src属性
		bigtu.src=smalltu.src;		
	}
	//鼠标移出
	small.onmouseout=function(){
		//smallbox隐藏
		smallbox.style.display='none';
		big.style.display='none';
	}	
	//li点击时 small的图片和big中的图片=当前点击图片
	for(var i=0;i<oLi.length;i++){
		oLi[i].onclick=function(){
			smalltu.src=this.firstElementChild.src;
		}
	}
	for(var i=0;i<oLi.length;i++){
		oLi[i].onmousemove=function(){
			this.style.border='1px solid red';
		}
		oLi[i].onmouseout=function(){
			this.style.border='none';
		}
	}



// 点击边框颜色
var aDiv=document.querySelectorAll('.content .nr .leix>div');
for(var i=0;i<aDiv.length;i++){
	aDiv[i].onclick=function(){
		for(var i=0;i<aDiv.length;i++){
			aDiv[i].style.borderColor='#b0b0b0';
			aDiv[i].style.color='#000';
		}
		this.style.borderColor='#ff6700';
		this.style.color='#ff6700';
	}
}

var bDiv=document.querySelector('.content .nr .d3');
var cDiv=document.querySelector('.content .nr .d4');
bDiv.onclick=function(){
	this.style.borderColor='#ff6700';
	this.style.color='#ff6700';
	cDiv.style.borderColor='#b0b0b0';
	cDiv.style.color='#000';
}
cDiv.onclick=function(){
	this.style.borderColor='#ff6700';
	this.style.color='#ff6700';
	bDiv.style.borderColor='#b0b0b0';
	bDiv.style.color='#000';
}


// 固定窗口
var oMain=document.querySelector('.bmain');
window.onscroll=function(){
		//scrollTop值 兼容处理
		var y=document.body.scrollTop||document.documentElement.scrollTop||window.pageYOffset;	
		//做滚动条判断
		if(y>=200){
			//div 变成 固定定位 top:50px;
			oMain.style.position='fixed';
			oMain.style.top=0+'px';
			oMain.style.zIndex='99999';
		}else if(y<200){
			//div 变成静态定位 
			oMain.style.position='static';
		}	
	}