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



//轮播图
	var now=0;
	var len=$('.main>.main1>.main5>li').length;	
	function run(){
		s=setInterval(function(){
			//当前隐藏图片
			$('.main>.main1>img').hide();
			//隐藏当前的数字背景
			$('.main>.main1>.main5>li').css('background-color','rgba(0,0,0,0.3)');
			if(now>=len-1){
				now=0;
			}else{
				now++;
			}			
			//显示下一张
			$('.main>.main1>img:eq('+now+')').fadeIn(2000);
			//显示下一个对应的数字
			$('.main>.main1>.main5>li:eq('+now+')').css('background-color','rgba(225,225,225,0.8)');
		},4000);
	
	}
	run();

	$('.main>.main1').mouseover(function(){
		clearInterval(s);
	}).mouseout(function(){
		run();
	});
	$('.main>.main1>.main5>li').click(function(){
		clearInterval(s);
		$('.main>.main1>img').hide();
		$('.main>.main1>.main5>li').css('background','rgba(0,0,0,0.3)');
		now=$(this).index();
		$('.main>.main1>img:eq('+now+')').fadeIn(1000);
		$('.main>.main1>.main5>li:eq('+now+')').css('background','rgba(225,225,225,0.8)');
	})
	$('.main>.main1>.main3_pre').click(function(){
		now--;
		if(now<0){
			now=len-1;
		}
		$('.main>.main1>img').hide();
		$('.main>.main1>.main5>li').css('background','rgba(0,0,0,0.3)');
		$('.main>.main1>img:eq('+now+')').fadeIn(1000);
		$('.main>.main1>.main5>li:eq('+now+')').css('background','rgba(225,225,225,0.8)');
	
	});

	
	//设置右箭头点击事件
	$('.main>.main1>.main4_next').click(function(){
		now++;
		if(now >len-1){
			now=0;
		}
		$('.main>.main1>img').hide();
		$('.main>.main1>.main5>li').css('background','rgba(0,0,0,0.3)');
		$('.main>.main1>img:eq('+now+')').fadeIn(1000);
		$('.main>.main1>.main5>li:eq('+now+')').css('background','rgba(225,225,225,0.8)');
	
	});


// 明星表单轮动
	var oUl=document.querySelector('.content2>.content2_2>ul');
	var aLi=document.querySelectorAll('.content2>.content2_2>ul>li');
	console.log(aLi);
	oUl.style.width = (aLi[0].offsetWidth+14)*aLi.length + 'px';
	console.log(oUl.style.width);
	var oHou = document.querySelector('.content2 .content2_1 div .c1');
    var oQian = document.querySelector('.content2 .content2_1 div .c2');
    var speed = 50;
    var timer = null;
    function move(){
       	    clearInterval(timer);
       		timer = setInterval(function () {
                 var disLeft =  oUl.offsetLeft+speed;
                 if(disLeft <= -((aLi[0].offsetWidth+14)*aLi.length/2)){
                     disLeft = -((aLi[0].offsetWidth+14)*aLi.length/2);
                 }
                 if(disLeft > 0 ){
                    disLeft = 0;
                          }
                 oUl.style.left = disLeft + 'px';
             },30)
       }
       oHou.onclick=function(){
       		move();
       		speed = 50;
       		this.style.color='#b0b0b0';
       		oQian.style.color='#ff6700';
       }
       oQian.onclick=function(){
       		move();
       		speed = -50;
       		this.style.color='#b0b0b0';
       		oHou.style.color='#ff6700';
       }



// 物品选项卡
            var aBtn = document.querySelectorAll('.content4>.content4_1 ul li a');
            var aDiv = document.querySelectorAll('.content4>.content4_2>ul');
            console.log(aBtn);
            for(var i=0;i<aBtn.length;i++){
                aBtn[i].index = i;
              aBtn[i].onmouseover = function () {
                  for(var i=0;i<aBtn.length;i++){
                      aBtn[i].className = 'none';
                      aDiv[i].className = 'none';
                  }
                  this.className = 'one';
                  aDiv[this.index].className = 'active';
              }
            };


            var oBtn = document.querySelectorAll('.content4-1>.content4_1 ul li a');
            var oDiv = document.querySelectorAll('.content4-1>.content4_2>ul');
            console.log(oBtn);
            for(var i=0;i<oBtn.length;i++){
                oBtn[i].index = i;
              oBtn[i].onmouseover = function () {
                  for(var i=0;i<oBtn.length;i++){
                      oBtn[i].className = 'none';
                      oDiv[i].className = 'none';
                  }
                  this.className = 'one';
                  oDiv[this.index].className = 'active';
              }
            };



            var cBtn = document.querySelectorAll('.content4-2>.content4_1 ul li a');
            var cDiv = document.querySelectorAll('.content4-2>.content4_2>ul');
            console.log(cBtn);
            for(var i=0;i<cBtn.length;i++){
                cBtn[i].index = i;
              cBtn[i].onmouseover = function () {
                  for(var i=0;i<cBtn.length;i++){
                      cBtn[i].className = 'none';
                      cDiv[i].className = 'none';
                  }
                  this.className = 'one';
                  cDiv[this.index].className = 'active';
              }
            };


// 为你推荐 滚动
	var aUl=document.querySelector('.content5 .content2_2 ul');
	var oLi=document.querySelectorAll('.content5 .content2_2 ul li');
	console.log(oLi);
	aUl.style.width = (oLi[0].offsetWidth+14)*oLi.length + 'px';
	console.log(aUl.style.width);
	var oPre = document.querySelector('.content5 .content2_1 div .c1');
    var oNext = document.querySelector('.content5 .content2_1 div .c2');
    var speed = 50;
    var otimer = null;
    function pao(){
       	    clearInterval(otimer);
       		otimer = setInterval(function () {
                 var disLeft =  aUl.offsetLeft+speed;
                 if(disLeft <= -((oLi[0].offsetWidth+14)*oLi.length/2)){
                     disLeft = -((oLi[0].offsetWidth+14)*oLi.length/2);
                 }
                 if(disLeft > 0 ){
                    disLeft = 0;
                          }
                 aUl.style.left = disLeft + 'px';
             },30)
       }
       oPre.onclick=function(){
       		pao();
       		speed = 50;
       		this.style.color='#b0b0b0';
       		oNext.style.color='#ff6700';
       }
       oNext.onclick=function(){
       		pao();
       		speed = -50;
       		this.style.color='#b0b0b0';
       		oPre.style.color='#ff6700';
       }



// 内容 轮播 滚动
  var num=0;
  var leng=3;
  function arun(){
    ss=setInterval(function(){
      //当前隐藏图片
      $('.content7 .content7_2>ul>.l4 .box>.u1>li').hide();
      //隐藏当前的数字背景
      $('.content7 .content7_2>ul>.l4>.dian>i').css('background','#A8A8A8');
      $('.content7 .content7_2>ul>.l4>.dian>i').css('border','2px solid #fff');
      if(num>=leng-1){
        num=0;
      }else{
        num++;
      }     
      //显示下一张
      $('.content7 .content7_2>ul>.l4 .box>.u1>li:eq('+num+')').fadeIn(2000);
      //显示下一个对应的数字
      $('.content7 .content7_2>ul>.l4>.dian>i:eq('+num+')').css('background','white');
      $('.content7 .content7_2>ul>.l4>.dian>i:eq('+num+')').css('border','2px solid #ff6700');
    },4000);
  
  }
  arun();

  $('.content7 .content7_2>ul>.l4').mouseover(function(){
    clearInterval(ss);
  }).mouseout(function(){
    arun();
  });
  $('.content7 .content7_2>ul>.l4>.dian>i').click(function(){
    clearInterval(ss);
    $('.content7 .content7_2>ul>.l4 .box>.u1>li').hide();
    $('.content7 .content7_2>ul>.l4>.dian>i').css('background','#A8A8A8');
    $('.content7 .content7_2>ul>.l4>.dian>i').css('border','2px solid #fff');
    num=$(this).index();
    $('.content7 .content7_2>ul>.l4 .box>.u1>li:eq('+num+')').fadeIn(1000);
    $('.content7 .content7_2>ul>.l4>.dian>i:eq('+num+')').css('background','white');
    $('.content7 .content7_2>ul>.l4>.dian>i:eq('+num+')').css('border','2px solid #ff6700');
  })
  $('.content7 .content7_2>ul>.l4>.pre').click(function(){
    num--;
    if(num<0){
      num=leng-1;
    }
    $('.content7 .content7_2>ul>.l4 .box>.u1>li').hide();
    $('.content7 .content7_2>ul>.l4>.dian>i').css('background','#A8A8A8');
    $('.content7 .content7_2>ul>.l4>.dian>i').css('border','2px solid #fff');
    $('.content7 .content7_2>ul>.l4 .box>.u1>li:eq('+num+')').fadeIn(1000);
    $('.content7 .content7_2>ul>.l4>.dian>i:eq('+num+')').css('background','white');
    $('.content7 .content7_2>ul>.l4>.dian>i:eq('+num+')').css('border','2px solid #ff6700');
  
  });

  //设置右箭头点击事件
  $('.content7 .content7_2>ul>.l4>.next').click(function(){
    num++;
    if(num >leng-1){
      num=0;
    }
    $('.content7 .content7_2>ul>.l4 .box>.u1>li').hide();
    $('.content7 .content7_2>ul>.l4>.dian>i').css('background','#A8A8A8');
    $('.content7 .content7_2>ul>.l4>.dian>i').css('border','2px solid #fff');
    $('.content7 .content7_2>ul>.l4 .box>.u1>li:eq('+num+')').fadeIn(1000);
    $('.content7 .content7_2>ul>.l4>.dian>i:eq('+num+')').css('background','white');
    $('.content7 .content7_2>ul>.l4>.dian>i:eq('+num+')').css('border','2px solid #ff6700');
  
  });


function brun(){
    sss=setInterval(function(){
      //当前隐藏图片
      $('.content7 .content7_2>ul>.l2 .box>.u1>li').hide();
      //隐藏当前的数字背景
      $('.content7 .content7_2>ul>.l2>.dian>i').css('background','#A8A8A8');
      $('.content7 .content7_2>ul>.l2>.dian>i').css('border','2px solid #fff');
      if(num>=leng-1){
        num=0;
      }else{
        num++;
      }     
      //显示下一张
      $('.content7 .content7_2>ul>.l2 .box>.u1>li:eq('+num+')').fadeIn(2000);
      //显示下一个对应的数字
      $('.content7 .content7_2>ul>.l2>.dian>i:eq('+num+')').css('background','white');
      $('.content7 .content7_2>ul>.l2>.dian>i:eq('+num+')').css('border','2px solid #ff6700');
    },4000);
  
  }
  brun();

  $('.content7 .content7_2>ul>.l2').mouseover(function(){
    clearInterval(sss);
  }).mouseout(function(){
    brun();
  });
  $('.content7 .content7_2>ul>.l2>.dian>i').click(function(){
    clearInterval(sss);
    $('.content7 .content7_2>ul>.l2 .box>.u1>li').hide();
    $('.content7 .content7_2>ul>.l2>.dian>i').css('background','#A8A8A8');
    $('.content7 .content7_2>ul>.l2>.dian>i').css('border','2px solid #fff');
    num=$(this).index();
    $('.content7 .content7_2>ul>.l2 .box>.u1>li:eq('+num+')').fadeIn(1000);
    $('.content7 .content7_2>ul>.l2>.dian>i:eq('+num+')').css('background','white');
    $('.content7 .content7_2>ul>.l2>.dian>i:eq('+num+')').css('border','2px solid #ff6700');
  })
  $('.content7 .content7_2>ul>.l2>.pre').click(function(){
    num--;
    if(num<0){
      num=leng-1;
    }
    $('.content7 .content7_2>ul>.l2 .box>.u1>li').hide();
    $('.content7 .content7_2>ul>.l2>.dian>i').css('background','#A8A8A8');
    $('.content7 .content7_2>ul>.l2>.dian>i').css('border','2px solid #fff');
    $('.content7 .content7_2>ul>.l2 .box>.u1>li:eq('+num+')').fadeIn(1000);
    $('.content7 .content7_2>ul>.l2>.dian>i:eq('+num+')').css('background','white');
    $('.content7 .content7_2>ul>.l2>.dian>i:eq('+num+')').css('border','2px solid #ff6700');
  
  });

  //设置右箭头点击事件
  $('.content7 .content7_2>ul>.l2>.next').click(function(){
    num++;
    if(num >leng-1){
      num=0;
    }
    $('.content7 .content7_2>ul>.l2 .box>.u1>li').hide();
    $('.content7 .content7_2>ul>.l2>.dian>i').css('background','#A8A8A8');
    $('.content7 .content7_2>ul>.l2>.dian>i').css('border','2px solid #fff');
    $('.content7 .content7_2>ul>.l2 .box>.u1>li:eq('+num+')').fadeIn(1000);
    $('.content7 .content7_2>ul>.l2>.dian>i:eq('+num+')').css('background','white');
    $('.content7 .content7_2>ul>.l2>.dian>i:eq('+num+')').css('border','2px solid #ff6700');
  
  });


  function crun(){
    as=setInterval(function(){
      //当前隐藏图片
      $('.content7 .content7_2>ul>.l3 .box>.u1>li').hide();
      //隐藏当前的数字背景
      $('.content7 .content7_2>ul>.l3>.dian>i').css('background','#A8A8A8');
      $('.content7 .content7_2>ul>.l3>.dian>i').css('border','2px solid #fff');
      if(num>=leng-1){
        num=0;
      }else{
        num++;
      }     
      //显示下一张
      $('.content7 .content7_2>ul>.l3 .box>.u1>li:eq('+num+')').fadeIn(2000);
      //显示下一个对应的数字
      $('.content7 .content7_2>ul>.l3>.dian>i:eq('+num+')').css('background','white');
      $('.content7 .content7_2>ul>.l3>.dian>i:eq('+num+')').css('border','2px solid #ff6700');
    },4000);
  
  }
  crun();

  $('.content7 .content7_2>ul>.l3').mouseover(function(){
    clearInterval(as);
  }).mouseout(function(){
    crun();
  });
  $('.content7 .content7_2>ul>.l3>.dian>i').click(function(){
    clearInterval(as);
    $('.content7 .content7_2>ul>.l3 .box>.u1>li').hide();
    $('.content7 .content7_2>ul>.l3>.dian>i').css('background','#A8A8A8');
    $('.content7 .content7_2>ul>.l3>.dian>i').css('border','2px solid #fff');
    num=$(this).index();
    $('.content7 .content7_2>ul>.l3 .box>.u1>li:eq('+num+')').fadeIn(1000);
    $('.content7 .content7_2>ul>.l3>.dian>i:eq('+num+')').css('background','white');
    $('.content7 .content7_2>ul>.l3>.dian>i:eq('+num+')').css('border','2px solid #ff6700');
  })
  $('.content7 .content7_2>ul>.l3>.pre').click(function(){
    num--;
    if(num<0){
      num=leng-1;
    }
    $('.content7 .content7_2>ul>.l3 .box>.u1>li').hide();
    $('.content7 .content7_2>ul>.l3>.dian>i').css('background','#A8A8A8');
    $('.content7 .content7_2>ul>.l3>.dian>i').css('border','2px solid #fff');
    $('.content7 .content7_2>ul>.l3 .box>.u1>li:eq('+num+')').fadeIn(1000);
    $('.content7 .content7_2>ul>.l3>.dian>i:eq('+num+')').css('background','white');
    $('.content7 .content7_2>ul>.l3>.dian>i:eq('+num+')').css('border','2px solid #ff6700');
  
  });

  //设置右箭头点击事件
  $('.content7 .content7_2>ul>.l3>.next').click(function(){
    num++;
    if(num >leng-1){
      num=0;
    }
    $('.content7 .content7_2>ul>.l3 .box>.u1>li').hide();
    $('.content7 .content7_2>ul>.l3>.dian>i').css('background','#A8A8A8');
    $('.content7 .content7_2>ul>.l3>.dian>i').css('border','2px solid #fff');
    $('.content7 .content7_2>ul>.l3 .box>.u1>li:eq('+num+')').fadeIn(1000);
    $('.content7 .content7_2>ul>.l3>.dian>i:eq('+num+')').css('background','white');
    $('.content7 .content7_2>ul>.l3>.dian>i:eq('+num+')').css('border','2px solid #ff6700');
  
  });

  function drun(){
    bs=setInterval(function(){
      //当前隐藏图片
      $('.content7 .content7_2>ul>.l1 .box>.u1>li').hide();
      //隐藏当前的数字背景
      $('.content7 .content7_2>ul>.l1>.dian>i').css('background','#A8A8A8');
      $('.content7 .content7_2>ul>.l1>.dian>i').css('border','2px solid #fff');
      if(num>=leng-1){
        num=0;
      }else{
        num++;
      }     
      //显示下一张
      $('.content7 .content7_2>ul>.l1 .box>.u1>li:eq('+num+')').fadeIn(2000);
      //显示下一个对应的数字
      $('.content7 .content7_2>ul>.l1>.dian>i:eq('+num+')').css('background','white');
      $('.content7 .content7_2>ul>.l1>.dian>i:eq('+num+')').css('border','2px solid #ff6700');
    },4000);
  
  }
  drun();

  $('.content7 .content7_2>ul>.l1').mouseover(function(){
    clearInterval(bs);
  }).mouseout(function(){
    drun();
  });
  $('.content7 .content7_2>ul>.l1>.dian>i').click(function(){
    clearInterval(bs);
    $('.content7 .content7_2>ul>.l1 .box>.u1>li').hide();
    $('.content7 .content7_2>ul>.l1>.dian>i').css('background','#A8A8A8');
    $('.content7 .content7_2>ul>.l1>.dian>i').css('border','2px solid #fff');
    num=$(this).index();
    $('.content7 .content7_2>ul>.l1 .box>.u1>li:eq('+num+')').fadeIn(1000);
    $('.content7 .content7_2>ul>.l1>.dian>i:eq('+num+')').css('background','white');
    $('.content7 .content7_2>ul>.l1>.dian>i:eq('+num+')').css('border','2px solid #ff6700');
  })
  $('.content7 .content7_2>ul>.l1>.pre').click(function(){
    num--;
    if(num<0){
      num=leng-1;
    }
    $('.content7 .content7_2>ul>.l1 .box>.u1>li').hide();
    $('.content7 .content7_2>ul>.l1>.dian>i').css('background','#A8A8A8');
    $('.content7 .content7_2>ul>.l1>.dian>i').css('border','2px solid #fff');
    $('.content7 .content7_2>ul>.l1 .box>.u1>li:eq('+num+')').fadeIn(1000);
    $('.content7 .content7_2>ul>.l1>.dian>i:eq('+num+')').css('background','white');
    $('.content7 .content7_2>ul>.l1>.dian>i:eq('+num+')').css('border','2px solid #ff6700');
  
  });

  //设置右箭头点击事件
  $('.content7 .content7_2>ul>.l1>.next').click(function(){
    num++;
    if(num >leng-1){
      num=0;
    }
    $('.content7 .content7_2>ul>.l1 .box>.u1>li').hide();
    $('.content7 .content7_2>ul>.l1>.dian>i').css('background','#A8A8A8');
    $('.content7 .content7_2>ul>.l1>.dian>i').css('border','2px solid #fff');
    $('.content7 .content7_2>ul>.l1 .box>.u1>li:eq('+num+')').fadeIn(1000);
    $('.content7 .content7_2>ul>.l1>.dian>i:eq('+num+')').css('background','white');
    $('.content7 .content7_2>ul>.l1>.dian>i:eq('+num+')').css('border','2px solid #ff6700');
  
  });