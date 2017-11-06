angular
  .module('yearBook')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = [
  '$transitions'
];

function MainCtrl($transitions){
  const vm = this;

  vm.isNavCollapsed = true;

  $transitions.onSuccess({}, () => {
    vm.isNavCollapsed = true;
  });
}
