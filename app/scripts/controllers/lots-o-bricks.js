'use strict';

/**
 * @ngdoc function
 * @name serviceQuizApp.controller:LotsOBricksCtrl
 * @description
 * # LotsOBricksCtrl
 * Controller of the serviceQuizApp
 */
angular.module('serviceQuizApp')
  .controller('LotsOBricksCtrl', ['brickWarehouse', function (lotsStore) {
    this.name = 'Lots O Bricks';

    var vm = this;

    lotsStore.getRedBricks().then(function(data){
      vm.redBricks = data;
    });

    lotsStore.getBlueBricks().then(function(data){
      vm.blueBricks = data;
    });

    lotsStore.getGreenBricks().then(function(data){
      vm.greenBricks = data;
    });
  }]);
