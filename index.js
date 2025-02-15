// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });
  
  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });

// gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelectorAll(".reveal-text")
splitTypes.forEach((char,i)=>{
  const text = new SplitType(char,{type:"chars"})
     gsap.from(text.chars,{
       scrollTrigger:{
        trigger:char,
        start:"top 90%",
        end:"top 35%",
        scrub:true,
       delay: 0.5,
        duration: 10, 
        markers:false,
       },
       y:100,
       opacity:0,
       stagger:0.5,
     
})

})


// type animation


    var typed = new Typed('#element', {
      strings: ['Web Devloper.','Frontend Devloper','Scroll Down For More Info'],
      typeSpeed: 80,
      loop:true
    });



gsap.from("#page1 h1",{
  delay: 0.8,
  durartion: 4,
  x: "10px",
  opacity: "0",
  stagger: 0.3,
})
gsap.from(".Right",{
  durartion:4,
  opacity:0,
  delay:0.8,
  y:"10px",
  stagger:0.3

})
gsap.from(".menu a",{
  opacity:0,
  delay:0.8,
  duration:0.5,
  stagger:0.3,
  y:"-10px"
})
// gsap.to("#page1 h1",{
//   opacity:0,
//   duration:2,
//   x:100,
//   scrollTrigger:{
//     trigger:"#page1",
//     scroller:"body",
//     markers:true,
//     start:"50% 50%",
//     scrub:1,
//     end:"10% 20%"
//   }
// })
let tl2 = gsap.timeline()

tl2.from("#page2 h2",{
     opacity:0,
     duration:2,
     x:100,
     scrollTrigger:{
       trigger:"#page2",
       scroller:"body",
       markers:false,
       start:"4% 80%",
       scrub:1,
       end:"6% 80%"
     }
})
tl2.from("#page3 h1",{
  opacity:0,
  duration:2,
  x:100,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"body",
    markers:false,
    start:"4% 80%",
    scrub:1,
    end:"6% 80%"
  }
})
tl2.from("#page4 h1",{
  opacity:0,
  duration:2,
  x:100,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"body",
    markers:false,
    start:"4% 80%",
    scrub:1,
    end:"6% 80%"
  }
})
tl2.from("#page5 h1",{
  opacity:0,
  duration:2,
  x:100,
  scrollTrigger:{
    trigger:"#page5",
    scroller:"body",
    markers:true,
    start:"4% 80%",
    scrub:1,
    end:"6% 80%"
  }
})

let tl = gsap.timeline()
tl.to(".slider-nav",{
  top:0,
  durartion:0.1,

})
tl.from(".slider-nav a",{
  y:-100,
  opacity:0,
  stagger:0.3
})
tl.pause()
const menu = document.querySelector(".menu-bar")
menu.addEventListener("click",()=>{
  tl.play()
})
const closee = document.querySelector(".close-btn")
closee.addEventListener("click",()=>{
  tl.reverse()
})

let tl3 = gsap.timeline({scrollTrigger:{
    trigger:"#page1",
    markers:false,
    start:"50% 0%",
    end:"5% 0%",
    scrub:1,
    durartion:1
}})
tl3.to("#page2 ",{
  backgroundColor:"black",
  // color:"white"
})
