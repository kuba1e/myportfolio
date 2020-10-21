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


gsap.to(".introduction.skills", {
    scrollTrigger: {
        trigger: ".box",
        toggleActions: "play pause resume reverse"
    },
    // start the animation when ".box" enters the viewport (once)
    duration: 1
});

gsap.to(".description_top", {
    scrollTrigger: {
        trigger: "",
        toggleActions: "play play play reverse"
    },
    // start the animation when ".box" enters the viewport (once)
    x: 1000,
    duration: 1
});

gsap.to(".description_bottom", {
    scrollTrigger: {
        trigger: "",
        toggleActions: "play play play reverse"
    },
    // start the animation when ".box" enters the viewport (once)
    x: 1000,
    duration: 1,
    delay: 1,
    ease: "none"
});


gsap.to(".projects_mylib", {
    scrollTrigger: {
        trigger: "",
        toggleActions: "play play play reverse"
    },
    // start the animation when ".box" enters the viewport (once)
    x: -1000,
    duration: 1,
});


gsap.to(".project_responsive", {
    scrollTrigger: {
        trigger: "",
        toggleActions: "play play play reverse"
    },
    // start the animation when ".box" enters the viewport (once)
    x: -1000,
    duration: 1,
    delay: 1,
    ease: "none"
});




ScrollTrigger.create({
    trigger: ".parallax",
    start: "top center",
    toggleClass: { targets: ".main", className: "active" }
});

ScrollTrigger.create({
    trigger: ".parallax",
    start: "top center",
    toggleClass: { targets: ".main", className: "active" }
});
