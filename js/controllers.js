angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope, $state) {
  // "Pets" is a service returning mock data (services.js)

  	$scope.tickChoice = function(){
  		var element = document.getElementById('tick');
  		element.style.display = 'block';
  	setTimeout(function(){$state.go($state.$current, null, { reload: true });},500);
  		
  	}
})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
});