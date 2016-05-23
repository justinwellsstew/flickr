angular.module('flickrApp', [])
.controller('flickrCtrl', function($scope, $http){
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
	    	$scope.photos = results.photos.photo;
	    	console.log ($scope.photos);
	     });
	    

		console.log('form submitted');
	}
})