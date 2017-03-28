'use strict';

/**
 * @ngdoc function
 * @name hibryd2App.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the hibryd2App
 */
angular.module('hibryd2App')
  .controller('MenuCtrl', function () {
  	this.menuList = ["Home", "Apps", "Search", "More..."];
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


  });
