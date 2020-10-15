let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.nav_links li,.header__burger_logo');

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