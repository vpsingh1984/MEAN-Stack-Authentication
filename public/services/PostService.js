(function () {
	
  angular
    .module('meanApp')
    .service('PostService', PostService);

PostService.$inject = ['$http'];
function PostService ($http) {

	// var getAll = function () {
	//   return $http.get('/posts', {
	//     headers: {
	//       Authorization: 'Bearer '+ authentication.getToken()
	//     }
	//   });
	// };
	var getAll = function () {
      return $http.get('/posts');
    };


	return {
	  getAll : getAll
	};



}


})();