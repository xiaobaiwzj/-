//轮播图
window.onload = function () {
  setInterval("fun()", 3000);
};

function fun() {
  var v1 = document.querySelector(".banner-img");
  var v2;
  if (v1.nextElementSibling === null) {
    v2 = document.querySelector(".main-banner img:first-child");
  } else {
    v2 = v1.nextElementSibling;
  }
  v1.style.opacity = 0;
  v1.classList.remove("banner-img");
  v2.style.opacity = 1;
  v2.classList.add("banner-img");
}
//返回顶部
var upTop = $("#upTop > a");
upTop.on("click", function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});
var setNav = function () {
  var _top = $(window).scrollTop();
  var _winW = $(window).width();
  var _winH = $(window).height();
  var _upTop = $("#upTop");

  if (_top > _winH) {
    _upTop.removeClass("fadeOutUp").addClass("fadeInDown");
  } else {
    _upTop.removeClass("fadeInDown").addClass("fadeOutUp");
  }
};

//鼠标滑过导航栏
$(document).ready(function () {
  dropdownOpen();//调用
});
/**
 * 鼠标划过就展开子菜单，免得需要点击才能展开
 */
function dropdownOpen() {

  var $dropdownLi = $('li.dropdown');

  $dropdownLi.mouseover(function () {
    $(this).addClass('open');
  }).mouseout(function () {
    $(this).removeClass('open');
  });
}


