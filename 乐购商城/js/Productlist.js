$("#provide .title ul li").mouseenter(function(){

    $(this).addClass("active").siblings().removeClass("active");
   
    let index=$(this).index();
    $("#provide .photo .proconbox").eq(index).addClass("cur").siblings().removeClass("cur")
})




$(function(){
    $("#proconbox").slidebox({
        boxh: 420, //盒子的高度
        w: 1200, //图片的宽度
        h: 420, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12, //控制按钮宽度
        controlsH: 12, //控制按钮高度
        radius: 6 //控制按钮圆角度数
    });


})


// 猜你喜欢



$(function(){

    let index=0;

    let boxheight=$("#childcloth .childcloth-top .box .proconbox").outerHeight(true);
   
    
    $("#childcloth .com-title a").click(function(){
            index++;

            let st=-(index*boxheight);
           
            if(index===3){
                index=0;
                $("#childcloth .childcloth-top .box").css("top",index);
            }else{
                
                $("#childcloth .childcloth-top .box").css("top",st);
            }

    })

})
