var app = angular.module('housingDenmark', ['rzModule', 'dbService']);

app.controller('mainCtrl', ['$scope', 'db', function(scope, db) {
  scope.houses;
  scope.No;
  scope.results;
  scope.col_lg = 'col-lg-6';
  // showing search box
  scope.search = false;
  scope.searchBox = function() {
    scope.search = !scope.search;
  }

  // json feed
  scope.init = function() {
    scope.No = 0;
    db.getData().then(function(result) {
      scope.houses = result.data.results;
    })
  };

  // filtering results
  scope.catching_results = function(house) {
    if (document.getElementById('houses')) {
      scope.results = true;
    } else {
      scope.No = 0;
      scope.results = false;
    }
  };
  scope.catching_results1 = function(house) {
    scope.realEstate_type == '' ? scope.realEstate_type = house : scope.realEstate_type = '', scope.No = 0;
  }

  // sliders
  scope.slider1 = {
    minValue: 10,
    maxValue: 90,
    options: {
      floor: 0,
      ceil: 100,
      step: 1
    }
  };
  scope.slider2 = {
    minValue: 10,
    maxValue: 90,
    options: {
      floor: 0,
      ceil: 100,
      step: 1
    }
  };

}])
