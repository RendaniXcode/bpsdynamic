// HTML CSS JS Result Skip Results Iframe
var colors = ["#f38630","#6fb936", "#ccc", "#6fb936"];
var wrap = gsap.utils.wrap(-100, 400);

//initially colorize each box and position in a row
gsap.set(".box", {
  backgroundColor: (i) => colors[i % colors.length],
  y: (i) => i * 50
});


gsap.to(".box", {
  duration: 5,
  ease: "none",
  y: "-=500", //move each box 500px to right
  modifiers: {
    y: gsap.utils.unitize(wrap) //force y value to wrap when it reaches -100
  },
  repeat: -1
});


//toggle overflow
const overflow = document.querySelector("#overflow");
overflow.addEventListener("change", applyOverflow);

function applyOverflow() {
  if(overflow.checked) {
    gsap.set(".wrapper", {overflow: "visible"});
  } else {
    gsap.set(".wrapper", {overflow: "hidden"});
  }
}