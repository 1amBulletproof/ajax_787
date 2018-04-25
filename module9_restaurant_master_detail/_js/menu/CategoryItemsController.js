(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryItemsController', CategoryItemsController);

CategoryItemsController.$inject = ['items'];
function CategoryItemsController(items) {
  this.items = items;
  console.log(this.items)
}

})();
