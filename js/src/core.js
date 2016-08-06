//noinspection JSUnusedAssignment
var dashlight = dashlight || {};

$(function () {
    dashlight = (function (module) {
        module.greeting = "Hello, world!";

        return module;

    })(dashlight || {});

    console.log(dashlight.greeting);
});
