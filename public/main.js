angular.module('meanApp', ['ui.router', 'ngTagsInput',])

.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $stateProvider. 
    state('/', {
      url: '/',
      templateUrl: 'views/main.view.html',
      controller: 'mainCtrl',
      controllerAs: 'vm'
    }).
    state('signup', {
      url: '/signup',
      templateUrl: 'views/signup.view.html',
      controller: 'registerCtrl',
      controllerAs: 'vm'
    }).
    state('signin', {
      url: '/signin',
      templateUrl: 'views/signin.view.html',
      controller: 'loginCtrl'
    }).
    state('about', {
      url: '/about',
      templateUrl: 'views/about.html'
    }).
    state('profile', {
      url: '/profile',
      templateUrl: 'views/profile.view.html',
      controller: 'profileCtrl',
      controllerAs: 'vm'
    }).
    state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.view.html',
      controller: 'contactCtrl',
      controllerAs: 'vm'
    });
    $urlRouterProvider.otherwise('/');
}).run(function($http, $location, $rootScope, authentication){
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
      if ($location.path() === '/profile' && !authentication.isLoggedIn()) {
        $location.path('/');
      }
    });

    $rootScope.logout = function(){
      authentication.logout();
      //isLoggedIn = false;
      $location.path("signin");
    };
});

