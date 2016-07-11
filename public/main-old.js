(function () {

  angular.module('meanApp', ['ui.router']);


function config ($routeProvider, $locationProvider) {
  $stateProvider. 
    state('articles', {
      url: '/',
      templateUrl: 'views/home.view.html',
      controller: 'homeCtrl',
      controllerAs: 'vm'
    }).
    state('register', {
      url: '/register',
      templateUrl: 'views/register.view.html',
      controller: 'registerCtrl',
      controllerAs: 'vm'
    }).
    state('login', {
      url: '/login',
      templateUrl: 'views/login.view.html',
      controller: 'loginCtrl',
      controllerAs: 'vm'
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
};

  // function config ($routeProvider, $locationProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/home.view.html',
  //       controller: 'homeCtrl',
  //       controllerAs: 'vm'
  //     })
  //     .when('/register', {
  //       templateUrl: 'views/register.view.html',
  //       controller: 'registerCtrl',
  //       controllerAs: 'vm'
  //     })
  //     .when('/login', {
  //       templateUrl: 'views/login.view.html',
  //       controller: 'loginCtrl',
  //       controllerAs: 'vm'
  //     })
  //     .when('/profile', {
  //       templateUrl: 'views/profile.view.html',
  //       controller: 'profileCtrl',
  //       controllerAs: 'vm'
  //     })
  //     .when('/contact', {
  //       templateUrl: 'views/contact.view.html',
  //       controller: 'contactCtrl',
  //       controllerAs: 'vm'
  //     })
  //     .otherwise({redirectTo: '/'});

  //   // use the HTML5 History API
  //   $locationProvider.html5Mode(true);
  // }

  function run($rootScope, $location, authentication) {
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
      if ($location.path() === '/profile' && !authentication.isLoggedIn()) {
        $location.path('/');
      }
    });

    $rootScope.logout = function(){
      authentication.logout();
      //isLoggedIn = false;
      $location.path("/");
    };

  }
  
  angular
    .module('meanApp')
    .config(['$routeProvider', '$locationProvider', config])
    .run(['$rootScope', '$location', 'authentication', run]);

})();