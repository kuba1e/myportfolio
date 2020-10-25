let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.hide_experience,.hide_projects,.hide_skills_scores,.show_projects,.show_experience,.show_skills-scores,.nav_links li,.header__burger_logo,.header__contacts,.mylib,.responsive,.container_click');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link => {
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link_grow");
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link_grow');
    });
});