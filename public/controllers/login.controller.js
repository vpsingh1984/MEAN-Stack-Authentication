

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
          $location.path('/profile');
        });
    }
    // articleService.save($scope.article, function(response){
    //   if (response.status == 'Authentication Failure')
    //     $location.path('/signin');

    //   $scope.articles = articleService.query();
    //   $scope.article  = {username: '', title: '', text: '', timestamp: '',tags:''};
    // });

  }]);













// (function () {

//   angular
//   .module('meanApp')
//   .controller('loginCtrl', loginCtrl);

//   loginCtrl.$inject = ['$location', 'authentication'];
//   function loginCtrl($scope, $location, authentication) {
//     var vm = this;

    
//     vm.onSubmit = function () {
//       if (authentication.isLoggedIn()) {
//         $location.path('profile');
//       }else{
//         authentication
//         .login(vm.credentials)
//         .error(function(err){
//           alert(err);
//         })
//         .then(function(){
//           $location.path('profile');
//         });
//       }
      
//     };

    

//   }

// })();