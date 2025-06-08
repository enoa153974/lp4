export function humburger() {
$(".openbtn").click(function () {
    $(this).toggleClass('active');
    $("#global-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#global-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#global-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});
}