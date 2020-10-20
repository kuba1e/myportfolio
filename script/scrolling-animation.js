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

