//文档加载事件
$(function () {
    $("#slider").slidebox({
        boxh: 420, //盒子的高度
        w: 1000, //图片的宽度
        h: 420, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12, //控制按钮宽度
        controlsH: 12, //控制按钮高度
        radius: 6 //控制按钮圆角度数
    });
    $(".haha").slidebox({
        boxh: 218, //盒子的高度
        w: 330, //图片的宽度
        h: 218, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12, //控制按钮宽度
        controlsH: 12, //控制按钮高度
        radius: 6 //控制按钮圆角度数
    });
    $(".hehe").slidebox({
        boxh: 348, //盒子的高度
        w: 370, //图片的宽度
        h: 348, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12, //控制按钮宽度
        controlsH: 12, //控制按钮高度
        radius: 6 //控制按钮圆角度数
    });
    $("#ebook .ebook-left .com-title li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active");

        let index = $(this).index();


        $("#ebook .ebook-left .con").eq(index).addClass("cur").siblings().removeClass("cur")


    });
    //    电子书畅销榜

      $("#ebook .ebook-right ul li").mouseenter(function(){

        $(this).find("div").show();
        $(this).find(".title").hide();


        $(this).siblings().find("div").hide();
        $(this).siblings().find(".title").show();
      })



    $("#cloth>.com-title>ul>li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active");

        let index = $(this).index();


        $("#cloth .cloth-right>ul").eq(index).addClass("cur").siblings().removeClass("cur")


    });

    $("#sport>.com-title>ul>li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active");

        let index = $(this).index();


        $("#sport .sport-right>ul").eq(index).addClass("cur").siblings().removeClass("cur")


    });

    $("#childcloth>.com-title>ul>li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active");

        let index = $(this).index();
        console.log(index)
        //   #childcloth .childcloth-right ul
        console.log($("#childcloth>.childcloth-right>ul"));

        $("#childcloth>.childcloth-right>ul").eq(index).addClass("cur").siblings().removeClass("cur")


    });

     
})


// $("#floornav ul  li").hover(function () {

//    $(this).css("backgroundColor",$(this).attr("bgc"));
// },function (){
//     $(this).css("backgroundColor",'');

// 

$(".floornav ul  li").hover(function () {
    // 向左移入
    $(this).css({
        "backgroundColor": $(this).attr("bgc"),
        "backgroundPositionX": -40,
        width: 40

    });
}, function () {

    //鼠标向左边位移 0px 隐藏
    $(this).css({
        "backgroundColor": '',
        "backgroundPositionX": 0,
        width: 0
    });

}).click(function () {
    let $jumpBox = $(".floor").eq($(this).index());
    let top = $jumpBox.offset().top;

    $("html,body").stop().animate({
        scrollTop: top
    }, 300)
})

//顶部搜索框
$(window).scroll(function () {
  
    
    //获取滚动的值
 let st=$("html,body").scrollTop();  
     if(st>300){
         $(".topsearch").stop().slideDown();
         $(".searchbox form").appendTo(".topsearch>div")
     }else{
         $(".topsearch").stop().slideUp();

         $(".topsearch>div form").appendTo(".searchbox")
     }
  
 })





// js事件回到顶部
let returntop = document.querySelector(".returntop")


returntop.addEventListener("click", function () {
    let timeip = setInterval(function () {
        let st = document.documentElement.scrollTop || document.body.scrollTop;

        let news = st - 50;
        document.documentElement.scrollTop = news;
        if (st == 0) {
            clearInterval(timeip)
        }
    }, 10)
})

// 分享到
let Coupon = document.documentElement.querySelector(".Coupon");

// 获取span
let spans = document.documentElement.querySelector(".Coupon>span");

Coupon.addEventListener("mouseenter", function () {

    this.querySelector("img").style.display = "block";

})

Coupon.addEventListener("mouseleave", function () {

    this.querySelector("img").style.display = "none";
})


// 分享到案例位置不变
//获取盒子初始位置
let inttop = parseInt((document.documentElement.clientHeight - Coupon.offsetHeight)/2);

Coupon.style.top = inttop + "px";
// 浏览器滚动的距离
window.onscroll=function () {
    let st =document.documentElement.scrollTop;
    startMove(Coupon,{top:(inttop+st)},500,"linear")
}
// 重新设置top的初始值
window.onresize=function () {
    inttop = parseInt((document.documentElement.clientHeight - Coupon.offsetHeight)/2);
    console.log(inttop)
    st =document.documentElement.scrollTop;
     Coupon.style.top = inttop +st+ "px";
   
}


