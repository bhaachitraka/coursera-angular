(function() {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.message = "";
    $scope.dishes = "";
    $scope.checkLunch = function(){
      if($scope.dishes == ""){
        $scope.message = "Please enter data first";
      }else{
        var split = $scope.dishes.split(',').length;
        $scope.count = split;
        if(split <= 3) {
          $scope.message = "Enjoy!";
        }else if (split > 3) {
          $scope.message = "Too much!";
        }
      }

    }

  }

})();
