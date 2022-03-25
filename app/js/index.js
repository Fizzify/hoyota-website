var tl = gsap.timeline();

tl.from(".hero-title", {
  opacity: 0,
  y: -50,
  duration: 2,
  ease: Power4.easeOut,
});

tl.from(".hero-btn", {
    opacity: 0,
    x: -50,
    duration: 2,
    ease: Power4.easeOut,
    stagger: .2
  }, "=-1");
  