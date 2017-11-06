angular
  .module('yearBook')
  .controller('StudentsHomeCtrl', StudentsHomeCtrl);

StudentsHomeCtrl.$inject = ['$scope', '$state', 'Student'];

function StudentsHomeCtrl($scope, $state, Student) {
  const vm = this;

  $scope.home = true;
  //.navbar display:none;

  vm.students = Student.query();
}
