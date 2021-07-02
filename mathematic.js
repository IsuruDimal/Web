var ngModule = angular.module("ngModule" , []);

ngModule.controller("Mathematical" , function($scope , $log , $http){
    console.log("Working...");

    $scope.finalAnswer = 25;
    $scope.clicks = 0;
    $scope.clicksTens=0;
    $scope.balanceOnce=0;
    $scope.clicks1to10=0;
    $scope.oncelCasses = ["moveOnce1","moveOnce2","moveOnce3","moveOnce4","moveOnce5","moveOnce6","moveOnce7","moveOnce8","moveOnce9","moveOnce10"];
   // $scope.selectorOnce = angular.element(document.querySelector("#imgOnce1"));

    $scope.answerplus = function(){
      $scope.answer = parseFloat($scope.givenNum) + 25;

      console.log($scope.answer);

      $scope.finalAnswer = $scope.answer;
    };
    $scope.answerminus = function(){
      $scope.answer = 25 - parseFloat($scope.givenNum);
      console.log($scope.answer);
      $scope.finalAnswer = $scope.answer;
    };

    $scope.clickOnce = function(){
      if($scope.clicks==0){
        angular.element(document.querySelector("#imgOnce0")).addClass($scope.oncelCasses[0]);
      }
      if($scope.clicks==1){
        angular.element(document.querySelector("#imgOnce1")).addClass($scope.oncelCasses[1]);
      }
      if($scope.clicks==2){
        angular.element(document.querySelector("#imgOnce2")).addClass($scope.oncelCasses[2]);
      }
      if($scope.clicks==3){
        angular.element(document.querySelector("#imgOnce3")).addClass($scope.oncelCasses[3]);
      }
      if($scope.clicks==4){
        angular.element(document.querySelector("#imgOnce4")).addClass($scope.oncelCasses[4]);
      }
      if($scope.clicks==5){
        angular.element(document.querySelector("#imgOnce5")).addClass($scope.oncelCasses[5]);
      }
      if($scope.clicks==6){
        angular.element(document.querySelector("#imgOnce6")).addClass($scope.oncelCasses[6]);
      }
      if($scope.clicks==7){
        angular.element(document.querySelector("#imgOnce7")).addClass($scope.oncelCasses[7]);
      }
      if($scope.clicks==8){
        angular.element(document.querySelector("#imgOnce8")).addClass($scope.oncelCasses[8]);
      }
      if($scope.clicks==9){
        angular.element(document.querySelector("#imgOnce9")).addClass($scope.oncelCasses[9]);
      }
      //$scope.selectorOnce[0].addClass($scope.oncelCasses[0]);
      $scope.clicks++;
      $scope.clicks1to10=$scope.clicks;
    };

    $scope.moveOncetoTens = function(){
      if($scope.clicks>=5){
        $scope.clickOncetoTens();
      }
    }
    $scope.clickOncetoTens = function(){
      $scope.balanceOnce = 10 - $scope.clicks;
      angular.element(document.querySelector("#imgOnce0")).addClass("moveOnceallback");
      angular.element(document.querySelector("#imgOnce1")).addClass("moveOnceallback");
      angular.element(document.querySelector("#imgOnce2")).addClass("moveOnceallback");
      angular.element(document.querySelector("#imgOnce3")).addClass("moveOnceallback");
      angular.element(document.querySelector("#imgOnce4")).addClass("moveOnceallback");
      angular.element(document.querySelector("#imgOnce5")).addClass("moveOnceallback");
      angular.element(document.querySelector("#imgOnce6")).addClass("moveOnceallback");
      angular.element(document.querySelector("#imgOnce7")).addClass("moveOnceallback");
      angular.element(document.querySelector("#imgOnce8")).addClass("moveOnceallback");
      angular.element(document.querySelector("#imgOnce9")).addClass("moveOnceallback");

      if($scope.balanceOnce==1){
        angular.element(document.querySelector("#imgOnce05")).addClass("moveOnce05back");
      }
      if($scope.balanceOnce==2){
        angular.element(document.querySelector("#imgOnce05")).addClass("moveOnce05back");
        //angular.element(document.querySelector("#imgOnce02")).addClass("moveOnce02back");
       // angular.element(document.querySelector("#imgOnce03")).addClass("moveOnce03back");
        angular.element(document.querySelector("#imgOnce04")).addClass("moveOnce04back");
      }
      if($scope.balanceOnce==3){
        angular.element(document.querySelector("#imgOnce05")).addClass("moveOnce05back");
      //  angular.element(document.querySelector("#imgOnce02")).addClass("moveOnce02back");
        angular.element(document.querySelector("#imgOnce03")).addClass("moveOnce03back");
        angular.element(document.querySelector("#imgOnce04")).addClass("moveOnce04back");
      }
      if($scope.balanceOnce==4){
        angular.element(document.querySelector("#imgOnce05")).addClass("moveOnce05back");
        angular.element(document.querySelector("#imgOnce02")).addClass("moveOnce02back");
        angular.element(document.querySelector("#imgOnce03")).addClass("moveOnce03back");
        angular.element(document.querySelector("#imgOnce04")).addClass("moveOnce04back");
      }
      if($scope.balanceOnce==5){
        angular.element(document.querySelector("#imgOnce05")).addClass("moveOnce05back");
        angular.element(document.querySelector("#imgOnce01")).addClass("moveOnce01back");
        angular.element(document.querySelector("#imgOnce02")).addClass("moveOnce02back");
        angular.element(document.querySelector("#imgOnce03")).addClass("moveOnce03back");
        angular.element(document.querySelector("#imgOnce04")).addClass("moveOnce04back");
      }

      angular.element(document.querySelector("#imgTens1")).addClass("moveTens1");
      $scope.clicksTens+=1;
    };
    $scope.clickTens = function(){
      if($scope.clicksTens==0){
        angular.element(document.querySelector("#imgTens1")).addClass("moveTens1");
      }
      if($scope.clicksTens==1){
        angular.element(document.querySelector("#imgTens2")).addClass("moveTens2");
      }
      if($scope.clicksTens==2){
        angular.element(document.querySelector("#imgTens3")).addClass("moveTens3");
      }
      if($scope.clicksTens==3){
        angular.element(document.querySelector("#imgTens4")).addClass("moveTens4");
      }
      if($scope.clicksTens==4){
        angular.element(document.querySelector("#imgTens5")).addClass("moveTens5");
      }
      if($scope.clicksTens==5){
        angular.element(document.querySelector("#imgTens6")).addClass("moveTens6");
      }
      if($scope.clicksTens==6){
        angular.element(document.querySelector("#imgTens7")).addClass("moveTens7");
      }
      if($scope.clicksTens==7){
        angular.element(document.querySelector("#imgTens8")).addClass("moveTens8");
      }
      if($scope.clicksTens==8){
        angular.element(document.querySelector("#imgTens9")).addClass("moveTens9");
      }
      if($scope.clicksTens==9){
        angular.element(document.querySelector("#imgTens10")).addClass("moveTens10");
      }

      $scope.clicksTens+=1;
    };
});