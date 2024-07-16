//Wizard Init

$("#wizard").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "none",
    titleTemplate: '#title#',
    onFinished: function (event, currentIndex) {
    $("#form").submit()
    }
});

//Form control

