angular.module('flickrApp', [])
.controller('flickrCtrl', function($scope, $http, $q, $timeout){

    $scope.submitted = false;
    $scope.search = false;

	$scope.submit = function(){
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
		    	$scope.search = true;
		    	$scope.photos = results.photos.photo;
		    	
		    }).then(wait)
		    .then(function(results){
		    	$scope.search = false;
		    	$scope.submitted = true;
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