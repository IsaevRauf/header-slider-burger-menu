const burger = document.querySelector("#header-btn");
const closeBtn = document.querySelector("#header-close-btn");
burger.addEventListener("click", function () {
  document.querySelector(".hidden-menu").classList.toggle("hidden-menu-open");
});

closeBtn.addEventListener("click", function () {
  document.querySelector(".hidden-menu").classList.toggle("hidden-menu-open");
});

document.querySelector("body").addEventListener("click", function (e) {
  const target = e.target;
  if (!target.closest(".hidden-menu") && !target.closest("#header-btn")) {
    document.querySelector(".hidden-menu").classList.remove("hidden-menu-open");
  }
});

$(document).ready(function(){
  $('.slider').slick({
      arrows:false,
      
      variableWidth:true,
  });

});
// $(document).ready(function(){
//   $('.slider2').slick({
//       arrows:false,
      
//       variableWidth:true,
//   });

// });
$('.slider2').slick(
  {
    arrows:true,
  }
);