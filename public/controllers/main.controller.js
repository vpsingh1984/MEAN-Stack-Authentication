(function() {
  
  angular
    .module('meanApp')
    .controller('mainCtrl', mainCtrl);

    function mainCtrl () {
      console.log('Home controller is running');
    }

})();