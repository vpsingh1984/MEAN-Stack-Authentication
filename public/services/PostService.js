(function () {
	
  angular
    .module('meanApp')
    .service('PostService', PostService);

PostService.$inject = ['$http', 'authentication'];
function PostService ($http, authentication) {

	var getAll = function () {
	  return $http.get('api/posts', {
	    headers: {
	      Authorization: 'Bearer '+ authentication.getToken()
	    }
	  });
	};

 	//Adding Post
 	var addPost = function (payload) {
 		// var payload = {
 		// 	title: title,
 		// 	link: link
 		// }
	  return $http.post('api/posts', payload, {
	    headers: {
	      Authorization: 'Bearer '+ authentication.getToken()
	    }
	  }).success(function(data){
	  	console.log(data);
	    return data;
	  });
	};






	return {
	  getAll : getAll,
	  addPost: addPost
	};



}


})();