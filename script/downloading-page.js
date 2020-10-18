const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".intro-block", { x: "-100%", duration: 2, delay: 1 });
tl.to(".intro-text", { x: "-100%", duration: 1 }, "-=2");
tl.to(".intro", { x: "-100%", duration: 1 }, "-=1");