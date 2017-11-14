'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope, $timeout, Language) {
    $(".menu a").animate({
       color: 'black'
    });
    $("#filter").animate({
      backgroundColor: "#F4F4F4",
        opacity: 1
    });
    $scope.language = Language.getLangue();
    $scope.$watch(function(){return Language.langue;}, function(){
        $scope.language = Language.getLangue();
    });

    $scope.langue = {
        "en": {
            titre1: "My Projects",
            proj1: "Neural Network",
            desc1: "Program Prototype used for image recognition and object positioning in a picture"
        },
        "fr": {
            titre1: "Mes Projets",
            proj1: "Réseau Neuronal",
            desc1: "Prototype de programme servant a la detection d'objects et leur position sur une image"
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