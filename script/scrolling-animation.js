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
        start: "end top",
        toggleActions: "play pause resume reverse"
    },
    // start the animation when ".box" enters the viewport (once)
    duration: 1
});

gsap.to(".description_top", {
    scrollTrigger: {
        trigger: ".scills-scores_container",
        start: "bottom top",
        toggleActions: "play play play reverse"
    },
    // start the animation when ".box" enters the viewport (once)
    x: 1000,
    duration: 1
});

gsap.to(".description_bottom", {
    scrollTrigger: {
        trigger: ".grid_container",
        start: "top center",
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
        trigger: ".scills-scores_container",
        start: "bottom top",
        toggleActions: "play play play reverse"
    },
    // start the animation when ".box" enters the viewport (once)
    x: -4000,
    duration: 1,
});


gsap.to(".project_responsive", {
    scrollTrigger: {
        trigger: ".grid_container",
        start: "top center",
        toggleActions: "play play play reverse"
    },
    // start the animation when ".box" enters the viewport (once)
    x: -4000,
    duration: 1,
    delay: 1,
    ease: "none"
});




ScrollTrigger.create({
    trigger: ".introduction.skills",
    start: "top top",
    marker: true,
    toggleClass: { targets: ".main", className: "active" }
});