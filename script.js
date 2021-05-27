const tl = new TimelineMax();

  tl.fromTo(
    '.hero img',
    1,
    { height : '0%' },
    { height : '500px',ease: "power2.easeInOut"}
  )

  .fromTo(
    '.hero img',
    0.7,
    { width : '100%' },
    { width : '80%',ease: "power2.easeInOut"}
  )

  .fromTo(
    '.slider',
    0.5,
    { x : '-150%' },
    { x : '0%',ease: "power1.out"}
  )

  .fromTo(
    '.hero h1',
    0.5,
    { x : '-150%' },
    { x : '0%',ease: "power1.out"}
  )

  $('#navigation').click(function(){
    $('html,body').animate({
      'scrollTop': 0
    }, 'slow');
  });


  $(function() {
  //画面をスクロールするとイベントが発動する
  $(window).scroll(function() {
    //フェードインさせたい要素の位置をずらす
    $('.fadein').css({
      'opacity': '0',
      'transform': 'translateX(30px)'
    });

    //スクロールバーの位置を取得
    var scroll = $(window).scrollTop();

    //ウィンドウの高さを取得
    var windowHeight = $(window).height();

    $('.fadein').each(function() {
      //フェードインさせたい要素の縦位置を取得
      var elemPos = $(this).offset().top;

      //要素がウィンドウの中に入ってからさらに100pxスクロールしたら要素をフェードインする
      if (scroll > elemPos - windowHeight + 100) {
        $(this).css({
          'opacity': '1',
          'transform': 'translateX(0)'
        });
      }
    });
  });
});
