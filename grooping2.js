var ngModule = angular.module("ngModule" , []);

ngModule.controller("grooping" , function($scope , $log , $http){
    console.log("Working...");
    $scope.word = "Choose The Correct One";
    $scope.move = function(){
        $scope.word = "The Correct One";
        angular.element(document.querySelector("#imgOrrange")).addClass("moveOrange");
        $scope.result = "next";
    }

    $scope.wrong = function(){
        $scope.word = "A Wrong One";
    }

});