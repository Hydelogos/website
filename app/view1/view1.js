'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $timeout, Language) {
    $(".menu a").animate({
        color: 'white'
    });
    $("#filter").animate({
        backgroundColor: "#8A2BE2",
        opacity: 0.6
    });
  $scope.language = Language.getLangue();
  $scope.$watch(function(){return Language.langue;}, function(){
      $scope.language = Language.getLangue();
  });

    $scope.langue = {
      "en": {
          titre1: "Hi,",
          titre2: "I'm ",
          titre3: "websites and applications developper",
          box1: "SEE MY PROJECTS",
          box2: "CONTACT ME"
      },
      "fr": {
          titre1: "Bonjour,",
          titre2: "Je m'appelle ",
          titre3: "développeur web et d'applications",
          box1: "VOIR MES PROJETS",
          box2: "ME CONTACTER"
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