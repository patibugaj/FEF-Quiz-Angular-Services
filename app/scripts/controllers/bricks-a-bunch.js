'use strict';

/**
 * @ngdoc function
 * @name serviceQuizApp.controller:BricksABunchCtrl
 * @description
 * # BricksABunchCtrl
 * Controller of the serviceQuizApp
 */
angular.module('serviceQuizApp')
  .controller('BricksABunchCtrl', ['brickWarehouse',function (bunchesStore) {
    this.name = 'Bricks A Bunch';

    var vm = this;

    bunchesStore.getBricksABunch().then(function(data){
      vm.redBricks = data;
    });

  }]);
