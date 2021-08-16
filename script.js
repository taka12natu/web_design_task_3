$(function(){

    $("#sp_menu_open").on("click", function(){
        $(this).fadeOut("normal");
        $("#sp_menu_close").fadeIn("normal");
        $("#menu").fadeIn("normal");
    });

    $("#sp_menu_close").on("click", function(){
        $(this).fadeOut("normal");
        $("#sp_menu_open").fadeIn("normal");
        $("#menu").fadeOut("normal");
    });

   
});

function sliderSetting(){
    var width = $(window).width();
    if(width <= 600){
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
 
// リサイズの実行
$(window).resize( function() {
  sliderSetting();
});


/*後で検証  
   $("#sp_menu_open").on("click", function(){   
        $("#sp_menu_open").addClass("hide");
        $("#sp_menu_open").addClass("show");
    });    

   $("#sp_menu_open").on("click", function(){
        $(this).fadeOut("normal");
    }); 
*/
