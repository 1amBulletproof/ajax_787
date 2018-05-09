(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['favItem']

function MyInfoController(favItem) {
  console.log("MyInfoController constructed")
  this.favItem = favItem
  console.log("Fav Item = " + this.favItem)
  // this.hasFavItem = false
  // console.log("MyInfoController: favItem = " + this.favItem)
  // if this.favItem != "NONE" {
  //   this.hasFavItem = true
  // }
}


})();
