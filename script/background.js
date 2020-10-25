$(document).ready(function () {
    $('.background_mask,.container_click').click(function (event) {
        $('.background_mask,.section__text,.container_click').toggleClass('active');
    });
    $('.show_skills-scores').click(function (event) {
        $('.skills-scores,.hide_skills_scores').toggleClass('active');
    });
    $('.container_click').click(function (event) {
        $('.background_mask').removeClass('opacity');
    });
    $('.hide_skills_scores').click(function (event) {
        $('.hide_skills_scores').removeClass('active');
    });
    $('.hide_skills_scores').click(function (event) {
        $('.skills-scores').removeClass('active');
    });
    $('.show_projects').click(function (event) {
        $('.introduction_projects').toggleClass('active');
    });
    $('.hide_projects').click(function (event) {
        $('.introduction_projects').removeClass('active');
    });
    $('.show_experience').click(function (event) {
        $('.introduction_experience').toggleClass('active');
    });
    $('.hide_experience').click(function (event) {
        $('.introduction_experience').removeClass('active');
    });
    $('.hide_experience').click(function (event) {
        $('.introduction_experience').removeClass('active');
    });
});
