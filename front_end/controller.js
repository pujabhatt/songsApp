var songApp = angular.module('songApp');
songApp.controller('songCtrl', function($scope,songService) {
  
  $scope.songs=[];
  init();

        function init() {
                songService
                    .getSongs()
                    .then(successFn,errorFn);
         }
       
		 $scope.filterSongs=function(searchText){
			    songService.
				getSongsBySearchText(searchText) 
                .then(successFn, errorFn);
        }
                
        function successFn(data) {
		    $scope.songs = data.songs;
			console.log($scope.songs);
        }
		
        function errorFn(error) {
            console.log(error);
        }

});
