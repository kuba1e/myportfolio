let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".parallax",
        start: "center bottom"
    }
});
tl.from(".skills-scores", { x: "500", duration: 1 });
