(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: '_html/items.template.html',
  controller: ItemComponentController,
  bindings: {
    items: '<'
  }

});
