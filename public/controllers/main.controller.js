(function() {
angular
.module('meanApp')
.controller('mainCtrl', mainCtrl);

function mainCtrl ($scope, PostService) {
	//var vm = this;

	// PostService.getAll().then(function(response){
	// 	vm.posts = response.data;
	// });
	$scope.posts = [
	  {title: 'post 1', upvotes: 5},
	  {title: 'post 2', upvotes: 2},
	  {title: 'post 3', upvotes: 15},
	  {title: 'post 4', upvotes: 9},
	  {title: 'post 5', upvotes: 4}
	];

	//$scope.posts = posts;


}


	// $scope.addPost = function(){
	// 	if (!$scope.title || $scope.title === '') {
	// 		return;
	// 	};
	//   	$scope.posts.push({
	//   		title: $scope.title, 
	//   		link: $scope.link,
	//   		upvotes: 0,
	// 		comments: [
	// 		    {author: 'Joe', body: 'Cool post!', upvotes: 0},
	// 		    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
	// 		]
	//   	});
	//   	$scope.title = '';
	//   	$scope.link = '';
	// };
	// $scope.addPost = function(){
	//   if(!$scope.title || $scope.title === '') { return; }
	//   PostService.create({
	//     title: $scope.title,
	//     link: $scope.link,
	//   });
	//   $scope.title = '';
	//   $scope.link = '';
	// };

	// $scope.incrementUpvotes = function(post) {
	//   PostService.upvote(post);
	// };
 //    }

})();