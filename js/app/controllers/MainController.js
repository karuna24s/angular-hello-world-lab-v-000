function MainController($scope){
  $scope.name = "Karuna";
  $scope.email = "karuna@example.com"
  $scope.phone = "2125552424"
}

angular
  .module('app')
  .controller('MainController', MainController);
