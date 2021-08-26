

//スマホメニューボタン アコーディオン表示
$("#sp_menu_open").on("click", function(){
    $("#menu").slideDown(800);
    $(this).fadeOut("normal");
    $("#sp_menu_close").fadeIn("normal");
});

$("#sp_menu_close").on("click", function(){
    $("#menu").slideUp(800);
    $(this).fadeOut("normal");
    $("#sp_menu_open").fadeIn("normal");
});

//モーダルウィンドウ
$('.js-modal-open').on('click',function(){
    $('.js-modal').fadeIn();
    return false;
});

$('.js-modal-close').on('click',function(){
    $('.js-modal').fadeOut();
    return false;
});

//メインビジュアル画像切り替え
$(".main_img:not(:first-child)").hide();
setInterval(function() {
    $(".main_img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".main_img_box");
},5000);


//スライドショー
function sliderSetting(){
    var width = $(window).width();
    if(width < 600){
        $('.slider').not('.slick-initialized').slick({
            mobileFirst: true,
            infinite: true, //スライドのループ
            centerMode: true, //要素を中央寄せ
            centerPadding:'10%', //両サイドの見えている部分のサイズ
            autoplay:true, //自動再生
            //矢印を変更するためにアイコンとクラス名を追加
            prevArrow: '<div class="slick-prev"><i class="fas fa-chevron-left slider-arrow"></i></div>', 
            nextArrow: '<div class="slick-next"><i class="fas fa-chevron-right slider-arrow"></i></div>'
        });
    }else{
            $('.slider.slick-initialized').slick('unslick');
    }
}
// 初期表示の実行
sliderSetting();

// spでメニュー開いてからpcにした場合にメニューが非表示になることを防ぐため
function MenuDisplay(){
    var width = $(window).width();
    if(width > 600){
        if($('#menu').css('display') == 'none') {
            $('#menu').css('display', 'flex');
        }
    }else{
        if($('#menu').css('display') == 'flex') {
            $('#menu').css('display', 'none');
        }
    }
}

// リサイズの実行
$(window).resize( function() {
    sliderSetting();
    MenuDisplay();
});