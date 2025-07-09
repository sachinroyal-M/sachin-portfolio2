gsap.registerPlugin(ScrollTrigger);

// Preloader fade out
window.addEventListener('load', () => {
  gsap.to('#preloader', { autoAlpha: 0, duration: 0.8, delay: 0.3 });
});

// Animate background shapes
gsap.utils.toArray('.bg-shapes .shape').forEach((el, i) => {
  gsap.to(el, {
    y: gsap.utils.random(20, 80),
    x: gsap.utils.random(-50, 50),
    rotation: gsap.utils.random(0,360),
    duration: gsap.utils.random(5,10),
    repeat: -1, yoyo: true,
    ease: 'sine.inOut',
    delay: i * 0.5
  });
});

// Animate sections entrance
gsap.utils.toArray('section').forEach(sec => {
  gsap.from(sec.querySelector('h2'), {
    y:50, opacity:0, duration:1,
    scrollTrigger: { trigger:sec, start:'top 80%' }
  });
  gsap.from(sec.querySelector('.container > p, .container > div'), {
    y:30, opacity:0, duration:1, delay:0.2,
    scrollTrigger: { trigger:sec, start:'top 80%' }
  });
});
