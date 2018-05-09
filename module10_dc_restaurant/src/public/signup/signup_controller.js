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
    console.log(this.firstname)
    console.log(this.lastname)
    console.log(this.email)
    console.log(this.phone)
    console.log(this.favItem)

    //menu service retrieve fav item https://YOUR-CHOSEN-SUBDOMAIN.herokuapp.com/menu_items/SHORT-NAME.json

  }
}



})();
