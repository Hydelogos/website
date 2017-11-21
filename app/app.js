'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);


myApp.factory('Language', function() {
    var langage = {};
    langage.langue = "en";
    langage.getLangue = function(){
        return langage.langue;
    };
    langage.toggle = function(){
        if(langage.langue == "fr"){
            langage.langue = "en";
        }else{
            langage.langue = "fr";
        }
    };
    return langage;
});

myApp.controller('mainCtrl', function($scope, $timeout, Language){
    $scope.language = Language.getLangue();
    $scope.$watch(function(){return Language.langue;}, function(){
        $scope.language = Language.getLangue();
        $timeout(function(){
            $scope.$apply();
        }, 1);
    });
    $scope.toggle = Language.toggle;
    $scope.langue = {
        "fr" : {
            home: "Accueil",
            work: "Mes Projets",
            about: "A Propos"
        },
        "en" : {
            home: "Home",
            work: "My Projects",
            about: "About"
        }
    }
})

$('.menu li')
    .mouseenter(function(){
      $('.menu li').not(this).fadeTo(50, 0.5);
    })
    .mouseleave(function(){
        $('.menu li').not(this).fadeTo(50, 1);
    });


