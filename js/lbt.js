/*定义一个变量，表示当前显示第几轮播项，从0开始 */
var index = 0;
/*功能1：点击右侧按钮切换下一项 */
$(".r_button").click(function(){
    /*找到轮播项，淡出隐藏 */
   $(".banner .lbt li").eq(index).fadeOut(500);
   /*找到当前的小点，样式恢复默认 */
   $(".Dot a").eq(index).removeClass("active").css({"transform":"translateY(0px)",
   'transition':'0.8s'});
   index++;
   /*限制索引 */
   if(index > $(".banner .lbt li").length - 1){
         index = 0;
       } 
    /*下一个轮播项淡入显示 */
    $(".banner .lbt li").eq(index).fadeIn(500);
    /*找到当前的小点，突出显示 */
    $(".Dot a").eq(index).addClass("active").css({"transform":"translateY(5px)",
       'transition':'0.8s'});

});

/*功能2：点击左侧按钮切换上一项 */
$(".l_button").click(function(){
       /*找到轮播项，淡出隐藏 */
   $(".banner .lbt li").eq(index).fadeOut(500);
   /*找到当前的小点，样式恢复默认 */
   $(".Dot a").eq(index).removeClass("active").css({"transform":"translateY(0px)",
   'transition':'0.8s'});;
   index--;
   /*限制索引 */
   if(index < 0){
         
         index = $(".banner .lbt li").length - 1
       } 
    /*下一个轮播项淡入显示 */
    $(".banner .lbt li").eq(index).fadeIn(500);
    /*找到当前的小点，突出显示 */
    $(".Dot a").eq(index).addClass("active").css({"transform":"translateY(5px)",
       'transition':'0.8s'});
    });

    // 功能3： 点击小点切换对应项
    $(".Dot a").click(function(){
      index = $(this).index()/*当前下标 */
      $(".banner .lbt li")/*获取图片li元素 */
      .eq(index)/*当前下标 */
      .fadeIn(500)/*淡入时间 */
      .siblings()/*兄弟元素；不包括自身 */
      .fadeOut();/*淡出隐藏 */
      $(".Dot a")/*获取小圆点元素 */
      .eq(index)/*当前下标 */
      .addClass("active")/*添加类名 */
      .css({"transform":"translateY(5px)",
      'transition':'0.8s'
       })
      .siblings()/*兄弟元素；不包括自身 */
      .removeClass("active")/*移除类名 */
      .css({"transform":"translateY(0)",
      'transition':'0.8s'
       })

    });

    // 功能4： 自动轮播
    var dsq;
    function fun(){
         dsq = window.setInterval(function(){
            $(".r_button").click();
        },1500);
    }
    fun();
    // 功能5： 鼠标进入轮播区，停止自动轮播
    $(".banner").mouseenter(function(){
       window.clearInterval(dsq);
    });
    // 功能6： 鼠标离开轮播区，重新启动自动轮播
    $(".banner").mouseleave(function(){
         fun(); 
    });
    

    
    /*左右键进入移动效果 */
    $(".banner").mouseenter(function(){
      $(".r_button").stop().animate({
        right:50   
      },500,"linear")
      $(".l_button").stop().animate({
        left:50
      },500,"linear")
   });
   /*左右键离开移动效果 */
   $(".banner").mouseleave(function(){
    $(".r_button").stop().animate({
      right:-50
    },500,"linear")
    $(".l_button").stop().animate({
      left:-50
    },500,"linear") 
 });
   

    // 方向键封装
    function nu(fx){
      $(fx).click(function(){
        var index = $(this).index();
        $(fx)
        .children("a")
        .eq(index)
        .css("color","black")
        .parent()
        .siblings('span')
        .children('a')
        .css("color","RGB(244,244,244")
      });
     
    }

    // 列表动画封装
      function fn(str){
        $(str).mouseenter(function(){
          var num =$(this).index();
          $(str)
          .eq(num)
          .css({"transform":"translateY(-5px)",
                'transition':'0.8s',
                'box-shadow':'3px 8px 3px 0 rgba(0,0,0,0.1)'
        })
        .siblings(str)
        .css({
          "transform":"translateY(0px)",
          'transition':'none',
          'box-shadow':'none'
        }
        );
        });
        /*鼠标离开清除所有样式 */
        $(str).mouseleave(function(){
          var num =$(this).index();
          $(str)
          .eq(num)
          .css({"transform":"translateY(0)",
          'transition':'0.8s',
          'box-shadow':'0px 0px 0px rgba(0,0,0,0.1)'
    });
        });
       
      }
    
      // 热销产品方向键
      nu(".rx span");
      // 新品列表
      fn(".xp");

    
    // 手机精品方向键
    nu(".jp span");
    // 手机精品列表
    fn(".jp_lb");


    // 笔记本电脑
    nu(".bjb span");
    // 笔记本电脑列表
    fn(".bjb_lb");


    // 平板电脑
    nu(".pb span");
    // 平板电脑列表
    fn(".pb_lb");


      //智能路由器
      nu(".lyq span");
      // 智能路由器列表
      fn(".lyq_lb");


      // 热销配件
       nu(".pj span")
      //  热销配件列表
       fn(".pj_lb");
       

          // 文字轮播图
        /*定义一个变量，表示当前显示第几轮播项，从文字-1的下标0开始 */
      var index1 = -1
      /*功能1：点击右侧按钮切换下一项 */
      $(".r_btn").click(function(){
         
      /*更改索引 */
      /*限制索引 */
        if(index1 > $(".footer_btm_one").length - 1){
            index1 = 0;
        } 
      index1++;
      
        /*动画 */
        $(".footer_btm_one")
           .eq(index1)/*对应的下标 */
           .fadeIn(500)/*淡入显示 */
           .siblings(".footer_btm_one")
           .fadeOut();

        });
 
      /*底部轮播图 */
      /*功能2：点击左侧按钮切换上一项 */
      
      $(".l_btn").click(function(){
          
          /*更改索引 */
          index1--;
          /*限制索引 */
            if(index1 < 0){
              index1 = $(".footer_btm_one").length - 1;
            }
            /*动画 */
            $(".footer_btm_one")
            .eq(index1)/*对应的下标 */
            .fadeIn(500)/*淡入显示 */
            .siblings(".footer_btm_one")
            .fadeOut();
      });
      
          // 创建一个定时器
          var lb;
          function fu(){
              lb = window.setInterval(function(){
                  $(".r_btn").click();
              },1000);
          }
          fu();
          // 鼠标进入清除定时器
          $(".item button,.footer_btm_one").mouseenter(function(){
              window.clearInterval(lb);
          });
          // 鼠标离开，启动定时器
          $(".item button,.footer_btm_one").mouseleave(function(){
              fu();
          });


          // 获取导航距离文档的间距
          var v1 = $('.bot_nav').offset().top;
          // 给window注册滚动条滚动事件
          $(window).scroll(function () { 
           // 获取被卷去的页面间距
           var v2 = $(window).scrollTop();
           // 判断比较
           if (v2 >= v1) {
             // 导航要固定
             $('.bot_nav').addClass('active');
             // 回到顶部按钮要显示
             $('.toTop').show();
           } else {
             // 导航不固定
             $('.bot_nav').removeClass('active');
             // 回到顶部按钮要隐藏
             $('.toTop').hide();
           }
          });

          // 回到顶部
          $('.toTop').click(function () { 
           // 设置页面卷去的时间
           $('html,body').animate({
             scrollTop:0
           }, 1000)
           
          });
