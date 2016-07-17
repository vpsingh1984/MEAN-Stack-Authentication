(function() {
angular
.module('meanApp')
.controller('mainCtrl', mainCtrl);

function mainCtrl ($scope, PostService, authentication) {
	var vm = this;
	vm.posts = [];

	//vm.isLoggedIn = authentication.isLoggedIn();

    vm.currentUser = authentication.currentUser();

	PostService.getAll().then(function(response){
		vm.posts = response.data;
	});

	vm.addPost = function(){
	var payload = {
		username: vm.currentUser.name,
	    title: vm.title,
	    text: vm.text,
	    tags: vm.tags
	  }
	  if(!vm.title || vm.title === '') { return; }
	  PostService.addPost(payload).then(function(response){
	  	console.log(response);
	  	if (response.status == '200') {
	  		vm.posts.push(response.data);
	  	}
	  });
	  vm.title = '';
	  vm.text = '';
	  vm.tags = '';
	};

	$scope.incrementUpvotes = function(post) {
	  PostService.upvote(post);
	};

}  

})();