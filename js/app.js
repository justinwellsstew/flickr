angular.module('flickrApp', [])
.controller('flickrCtrl', function($scope, $http, $q, $timeout){
    $scope.search = false;
    $scope.message = "";

	$scope.submit = function(){
			var input = $scope.searchInput;
	    	var url = "https://api.flickr.com/services/rest";
			var params = {
			    method: 'flickr.photos.search',
			    api_key: 'c79ebccb4daf5d50cb6963bd044ebddf',
			    tags: $scope.searchInput,
			    format: 'json',
			    nojsoncallback: 1
	    	}
		    $http({
		    	url : url,
		    	params : params,

		     }).success(function(results){
		     	$scope.searchInput = "";
		    	$scope.search = true;
		    	$scope.photos = results.photos.photo;
		    	$scope.message = "searching for images tagged with " + input;

		    }).then(wait)
		    .then(function(results){
		    	$scope.message = "There are " + $scope.photos.length + " tagged with " + input;
		    	
		});
			function wait() {
		    return $q(function(resolve, reject){
		      $timeout(function() {
		        resolve();
		      }, 2000);
		  })
		}
	}
});