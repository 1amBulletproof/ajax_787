(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: '_html/categories.template.html',
  bindings: {
    categories: '<'
  }

});

})();
