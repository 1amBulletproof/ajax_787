(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

function SignUpController() {
  console.log("SignUpController constructed")
  this.firstname = ""
  this.lastname = ""
  this.email = ""
  this.phone = ""
  this.favitem = ""

  this.signup = function() {
    console.log("signup() begin")
  }
}



})();
