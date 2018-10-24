(function() {
  'use strict';

  var songApp = angular.module('songApp');
   songApp.constant('CONFIG', {
      'API_HOST': 'http://localhost:5000/api/songs/'
    });

})();