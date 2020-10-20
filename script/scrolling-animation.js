gsap.from(".scores", {
    scrollTrigger: {
        trigger: ".scores",
        toggleActions: "restart pause resume pause"
    },
    scaleX: 0.1,
    duration: 2,
    transformOrigin: "left center",
    ease: "none"
});


gsap.to(".introduction", {
    scrollTrigger: {
        trigger: ".box",
        toggleActions: "play pause resume reverse"
    },
    // start the animation when ".box" enters the viewport (once)
    x: 1000,
    duration: 1
});


