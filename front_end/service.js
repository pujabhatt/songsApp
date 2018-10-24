(function () {
    'use strict';
 var songApp = angular.module('songApp');
    songApp
        .service('songService', songService);

    songService.$inject = ['$http', '$q', 'CONFIG'];

    function songService($http, $q, CONFIG) {

        var self = this;
		self.getSongs = getSongs;
        self.getSongsBySearchText = getSongsBySearchText;
   
        function getSongs() {
            return $http.get(CONFIG.API_HOST)
                .then(successFn, errorFn);
        }

        function getSongsBySearchText(searchtxt) {
            return $http.get(CONFIG.API_HOST + searchtxt)
                .then(successFn, errorFn);
        }

        function successFn(response) {
            return response.data;
        }

        function errorFn(response) {
            return $q.reject('ERROR: ' + response.statusText);
        }
    }

})();
