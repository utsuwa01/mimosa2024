
// ページスクロール
$(function(){
  $(".pagetop").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.pagetop').fadeIn();
    } else {
      $('.pagetop').fadeOut();
    }
  });
  $('.pagetop').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});


// フッターCTA

$(function() {
var _window = $(window),
    _CTA = $('#footer_fixarea'),
    heroBottom;
 
_window.on('scroll',function(){     
    if(_window.scrollTop() > 100){
        _CTA.addClass('show');   
    }
    else{
        _CTA.removeClass('show');   
    }
}); 
_window.trigger('show');
});	

$(function(){
  $(".pagetop").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.pagetop').fadeIn();
    } else {
      $('.pagetop').fadeOut();
    }
  });
  $('.pagetop').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});

//$("#headerAreaLogo").click(function() {
//    $("html, body").animate({
//        scrollTop: 0}, 400);
//    return false;
//});

// ヘッダー翻訳ボタン
$("#js_langubtn").on("click", function () {
  $(".js_languopen").toggleClass("is_show")
})

// menu開閉
$(".js_opnebtn").on("click", function(i) {
            $(i.currentTarget).removeClass("is_show"),
            $(".js_closebtn").addClass("is_show"),
            $(".js_navbg").addClass("is_show"),
            $(".js_navbg").removeClass("is_hide"),
            setTimeout(function() {
                $(".js_nav").addClass("is_show"),
                $(".js_nav").removeClass("is_hide"),
                $(".js_navmove").addClass("is_show"),
                $(".js_navmove").removeClass("is_hide")
            }, 300)
        }),
        $(".js_closebtn").on("click", function(i) {
            $(i.currentTarget).removeClass("is_show"),
            $(".js_opnebtn").addClass("is_show"),
            $(".js_navbg").addClass("is_hide"),
            $(".js_navbg").removeClass("is_show"),
            $(".js_nav").addClass("is_hide"),
            $(".js_nav").removeClass("is_show"),
            $(".js_navmove").addClass("is_hide"),
            $(".js_navmove").removeClass("is_show"),
            $(".js_splanguopen").hasClass("is_show") && $(".js_splanguopen").removeClass("is_show")
        });

//モーダルウインドウ
var s = $(".js_modal")
          , o = $(".js_modalimg");
        $(".js_modalbtn").on("click", function(i) {
            var e = $(i.currentTarget).find(".js_modalinner").clone()
              , t = $(window).scrollTop();
            return o.append(e),
            $("body").addClass("is_fixed").css("top", -1 * t).data("top", t),
            setTimeout(function() {
                s.find(".js_modalinner").css("display", "block"),
                s.addClass("is_show")
            }, 100),
            !1
        }),
        $(".js_modalclose").on("click", function() {
            var i = $("body").data("top");
            return $("body").removeClass("is_fixed").attr("style", "").data("top", ""),
            $("html,body").scrollTop(i),
            s.removeClass("is_show"),
            setTimeout(function() {
                o.empty()
            }, 300),
            !1
        })

// kiyaku
$(function(){
        $(".js_open").on("click", function() {
            $(".js_inner").slideToggle();
            $(this).toggleClass("is_open");
        });
});

$(function(){
        $(".faq_block h3").on("click", function() {
            $(this).next().slideToggle();
            $(this).toggleClass("active");
        });
    $(".faq_block h3").mouseover(function(){
        $(this).addClass("over");   
    });
    $(".faq_block h3").mouseout(function(){
        $(this).removeClass("over");    
    });
});

$(document).on('click', 'a[href*="#"]', function() {
    let time = 400;
	let target = $(this.hash);
	if (!target.length) return;
	let targetY = target.offset().top-90;
	$('html,body').animate({scrollTop: targetY}, time, 'swing');
	return false;
});

// スクロール時headerにscroll付与

$(function() {
var _window = $(window),
    _header = $('#header'),
    heroBottom;
 
_window.on('scroll',function(){     
    heroBottom = $('#catchArea').height();
//    if(_window.scrollTop() > heroBottom){
      if(_window.scrollTop() > 100){
        _header.addClass('scroll');   
    }
    else{
        _header.removeClass('scroll');   
    }
}); 
_window.trigger('scroll');
});	

