(function() {
  
  angular
    .module('meanApp')
    .controller('contactCtrl', homeCtrl);

    function homeCtrl () {
    	var vm = this;

      console.log('Contact controller is running');
    }

})();