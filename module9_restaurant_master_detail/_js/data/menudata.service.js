(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('MenuCategoriesURL', "https://davids-restaurant.herokuapp.com/categories.json")
.constant('MenuItemsURL', "https://davids-restaurant.herokuapp.com/menu_items.json");

MenuDataService.$inject = ['$q', '$http', 'MenuCategoriesURL', 'MenuItemsURL']

function ShoppingListService($q, $http, MenuCategoriesURL, MenuItemsURL) {
  
  this.getAllCategories = function() {
    var response = $http({
      method: "GET",
      url: MenuCategoriesURL
    });
    return response;
  };

  this.getItemsForCategory = function(categoryShortName) {
    var response = $http({
      method: "GET",
      url: MenuItemsURL,
      params: {
        category: categoryShortName
      }
    });

    return response;
  };

}

})();
