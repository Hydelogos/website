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
       color: 'black'
    });
    $("#filter").animate({
      backgroundColor: "#882601",
        opacity: 1
    });
    $scope.language = Language.getLangue();
    $scope.$watch(function(){return Language.langue;}, function(){
        $scope.language = Language.getLangue();
    });

    $scope.langue = {
        "en": {
            titre1: "About Me",
			age: "24 years old",
			parcours: "Studies: Actually in my second year of BTS (BAC+2) in computer science under a work-study contract, I aim to pursue my study until I reach a BAC+5 level and become an engineer in the programming field.",
			motivation: "I always was curious and passionate about new technologies and even more when I started coding. Always wanting to improve my skills I challenge myself everyday to become better at what I love."
        },
        "fr": {
            titre1: "A Propos de Moi",
			age: "24 ans",
			parcours: "Parcours: Je suis actuellement en deuxième année de BTS (BAC+2) d'informatique en alternance et compte poursuivre mes études jusque BAC+5 afin de devenir ingénieur dans le domaine du développement informatique.",
			motivation: "J'ai toujours été curieux et passionné sur le sujet des nouvelles technologies, et bien davantage quand j'ai decouvert la programmation. Voulant toujours améliorer mes competences je me défie chaque jour pour me perfectionner chaque fois plus à faire ce que j'aime."
        }

    };
    $('.container .box')
        .off().on('mouseenter', function(){
        $(this).animate({color: "black", backgroundColor: "white"}, 200);
    })
        .on('mouseleave', function(){
            $(this).animate({color: "white", backgroundColor: "transparent"}, 200);
        });
});