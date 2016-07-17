

angular
  .module('meanApp').
  controller('loginCtrl', ['$scope', '$location', 'authentication', function($scope, $location, authentication){

    $scope.onSubmit = function(){

      var user = {
        email : $scope.email,
        password : $scope.password
      };
      authentication.login(user)
        .error(function(err){
          console.log(err);
        })
        .then(function(){
          $location.path('/');
        });
    }

  }]);