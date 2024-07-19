
//  loder
var tl = gsap.timeline();
tl.from("#page1-loder" , {
    top : -1000,
   duration :1 ,
   stagger : 1,
})
tl.from(".container1" , {
    y : 800,
   duration :1 ,
   stagger : 0.2,
})
tl.to(".container1" , {
    scale : 0,
   duration :1 ,
   stagger : 0.1,
})
tl.from(".text" , {
    scale : 0,
   duration :2 ,
   stagger : 0.1,
})
tl.to("#page1-loder" , {
  top : -1000,
 duration :2 ,
})



var lastScrollTop = 0;
var navbar = document.querySelector("#page1 #nav");

window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-10%";
  } else {
    navbar.style.top = "0%";
  }
  lastScrollTop = scrollTop;
});

var dropdown = document.querySelector("#dropdown")
var menu = document.querySelector(".menu")

menu.addEventListener("mouseenter", function () {
  dropdown.style.display = "block";
})
menu.addEventListener("mouseleave", function () {
  dropdown.style.display = "none";
})
//  page3
var elem = document.querySelectorAll(".elem")
// var elemimg = document.querySelector(".elem img")

elem.forEach((element) => {

  element.addEventListener("mouseenter", function () {
    element.childNodes[3].style.opacity = 1
  })
  element.addEventListener("mouseleave", function () {
    element.childNodes[3].style.opacity = 0
  })
  element.addEventListener("mousemove", function (dets) {

    element.childNodes[3].style.left = dets.clientX + "px"
  })

})
// page 4

gsap.to("#page4 .img", {
  Transform: "translateX(-350%)",
  buration: 4,
  scrollTrigger: {
    scroller: "body",
    trigger: "#page4",
    markers: true,
    start: "top 0%",
    end: "top -60%",
    scrub: 2,
    pin: true,

  }
})