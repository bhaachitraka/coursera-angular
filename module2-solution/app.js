(function(){
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;

    toBuy.boughtItem = function(index){
      ShoppingListCheckOffService.boughtItem(index);
    }

    toBuy.items = ShoppingListCheckOffService.getToBuyList();
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;
    alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtList();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyList = [
      {
        name: "cookies",
        quantity: "10"
      },
      {
        name: "deodrants",
        quantity: "2"
      },
      {
        name: "cereals",
        quantity: "2"
      },
      {
        name: "eggs",
        quantity: "12"
      },
      {
        name: "bread",
        quantity: "1"
      }
    ];
    var alreadyBoughtList =[];

    service.boughtItem = function(index){
      var item = toBuyList[index];
      toBuyList.splice(index, 1);
      alreadyBoughtList.push(item);
      console.log(toBuyList);
      console.log(alreadyBoughtList);
    }

    service.getToBuyList = function () {

      return toBuyList;
    }

    service.getAlreadyBoughtList = function () {

      return alreadyBoughtList;
    }
  }

})();
