$(".description_bottom").hover(
    function () {
        $('.project_responsive').addClass("hover");
    }, function () {
        $('.project_responsive').removeClass("hover");
    }
);
$(".description_top").hover(
    function () {
        $('.projects_mylib').addClass("hover");
    }, function () {
        $('.projects_mylib').removeClass("hover");
    }
);

$(".container_click").hover(
    function () {
        $('.background_mask').addClass("opacity");
    }, function () {
        $('.background_mask').removeClass("opacity");
    }
);

