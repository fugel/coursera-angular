(function() {
  'use strict';

  angular.module('data')
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', '$ApiBasePath'];
  function MenuDataService($http, ApiBasePath) {
    var service = this;

    service.getAllCategories = function (searchTerm) {
      return $http({
        method: "GET",
        url: (ApiBasePath+'/categories.json')
      }).then(function(result) {
        return result.data
      });
    };
  }
}());
