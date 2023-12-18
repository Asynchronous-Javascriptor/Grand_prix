window.addEventListener('scroll', function () {
  var header = document.querySelector('.nav');
  var scrolldown = this.document.querySelector("#scrolldown")
  header.classList.toggle('sticky', window.scrollY > 0);
  scrolldown.classList.toggle('scrolldowncls',window.scrollY > 0);
var logo = document.querySelector("#logo");

  if(window.scrollY > 0){
    logo.setAttribute("src","borko-logo-white.png");
  }

  else{
    logo.setAttribute("src","borko-logo-black.png");
  }

  if(window.innerWidth < 749){
    alert("website is not responsive view in desktop mode");
  }
});


var tl = gsap

tl.from(".nav,.nav ul li", {
  y: -60,
  duration: 0.7,
  stagger: 0.25,
})


  tl.from(" .bikeimg", {
    x: -800,
    duration: 0.9,
    delay: 1,
    opacity: 0
  })

  tl.from(" .text p , .text h1, .text div", {
    opacity: 0,
    duration: 1,
    stagger: 0.25,
    x: 120
  })




gsap.to("#scrolldown",{
  y:40,
  repeat:-1,
  duration:1,
  yoyo:true
})

gsap.from(".hero_2",{
  scale:0,
  opacity:0,
  scrollTrigger:{
    scroll:"#main",
    trigger:".hero_2",
    start:"top 250%",
    scrub:2
  }
})

  
gsap.from(".hero_3",{
  scale:0,
  opacity:0,
  scrollTrigger:{
    scroll:"#main",
    trigger:".hero_3",
    start:"top 350%",
    scrub:true
  }
})


 