'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', function($scope, $timeout, Language) {
    $(".menu a").animate({
       color: 'white'
    });
    $("#filter").animate({
      backgroundColor: "#262228",
        opacity: 1
    });
    $scope.language = Language.getLangue();
    $scope.$watch(function(){return Language.langue;}, function(){
        $scope.language = Language.getLangue();
    });

    $scope.langue = {
        "en": {
            titre1: "About Me:",
            desc: "Full Stack developper under a work study contract since a year and a half, passionate since forever.",
            desc2: "Skills in JQuery, NodeJS, Angular, PHP, C#, Java and Perl",
            contact: "Contact Me"
        },
        "fr": {
            titre1: "A Propos de moi:",
            desc: "Développeur Full Stack en apprentissage depuis un an et demi, et passionné depuis toujours.",
            desc2: "Compétences en JQuery, NodeJS, Angular, PHP, C#, Java et Perl",
            contact: "Me Contacter"
        }

    };
    var text = [];
    $('.boxCircle')
        .off().on('mouseenter', function(){
        $(this).animate({color: "black", backgroundColor: "white"}, 200);
    })
        .on('mouseleave', function(){
            $(this).animate({color: "white", backgroundColor: "transparent"}, 200);
        });
});