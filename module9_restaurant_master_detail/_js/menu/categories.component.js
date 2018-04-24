(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: '_html/categories.template.html',
  controller: CategoriesComponentController,
  bindings: {
    categories: '<'
  }
  
});
