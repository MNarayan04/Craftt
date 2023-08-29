function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init()


var cursor = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x+20+"px"
    cursor.style.top = dets.y+20+"px "
})
 var tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top 25%",
        end:"top 0",
        scrub:3
    }
})
tl.to(".page1 h1 ",{
    x:-100,
    // duration:1,   
},"anim")

tl.to(".page1 h2 ",{
    x:100,
    // duration:1,   
},"anim")

tl.to(".page1 video",{
    width:"80%"

},"anim")


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top -125%",
        end:"top -130",
        scrub:3
    }
})

tl2.to(".main",{
    backgroundColor:"#fff",
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top -280%",
        end:"top -300", 
        scrub:3
    }
})

tl3.to(".main",{
    backgroundColor:"#0F0D0D",
})

var boxes = document.querySelectorAll(".box");
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        // elem.style.backgroundColor="red";
       var att =  elem.getAttribute("data-image");
    //    console.log(att);
        cursor.style.width="400px";
        cursor.style.height="250px";
        cursor.style.borderRadius="0";
        cursor.style.backgroundImage=`url(${att})`
    })

    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor="transparent";
        cursor.style.width="30px";
        cursor.style.height="20px";
        cursor.style.borderRadius="50";
        cursor.style.backgroundImage=`none`

    })
})


var h4 = document.querySelectorAll("#nav h4");
var pur = document.querySelector("#purple");
h4.forEach(function(elem){
    // console.log(elem)
    elem.addEventListener("mouseenter",function(){
        // console.log(elem);

        pur.style.display ="block"
        pur.style.opacity="1"
    })


    elem.addEventListener("mouseleave",function(){
        // console.log(elem);
        pur.style.display ="none"
        pur.style.opacity="0"
    })
})