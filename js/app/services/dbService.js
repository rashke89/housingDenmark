angular.module('dbService', [])

  .service('db', ['$http', function(http) {
    var self = this;
    this.getData = function() {
      return http.get('js/JSON_feed/house-data.json')
    }
  }])
