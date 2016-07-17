(function() {
angular
.module('meanApp')
.controller('mainCtrl', mainCtrl);

function mainCtrl ($scope, ArticleService, authentication) {
	var vm = this;
	vm.articles = [];

	//vm.isLoggedIn = authentication.isLoggedIn();

    vm.currentUser = authentication.currentUser();

	ArticleService.getAll().then(function(response){
		vm.articles = response.data;
	});

	vm.postArticle = function(){
	var payload = {
		username: vm.currentUser.name,
	    title: vm.title,
	    text: vm.text,
	    tags: vm.tags
	  }
	  if(!vm.title || vm.title === '') { return; }
	  ArticleService.addArticle(payload).then(function(response){
	  	console.log(response);
	  	if (response.status == '200') {
	  		vm.articles.push(response.data);
	  	}
	  });
	  vm.title = '';
	  vm.text = '';
	  vm.tags = '';
	};

	$scope.incrementUpvotes = function(article) {
	  ArticleService.upvote(article);
	};

}  

})();