(function () {
	
  angular
    .module('meanApp')
    .service('ArticleService', ArticleService);

ArticleService.$inject = ['$http', 'authentication'];
function ArticleService ($http, authentication) {

	var getAll = function () {
	  return $http.get('api/articles', {
	    headers: {
	      Authorization: 'Bearer '+ authentication.getToken()
	    }
	  });
	};

 	//Adding Post
 	var addArticle = function (payload) {
 		// var payload = {
 		// 	title: title,
 		// 	link: link
 		// }
	  return $http.post('api/articles', payload, {
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
	  addArticle: addArticle
	};



}


})();