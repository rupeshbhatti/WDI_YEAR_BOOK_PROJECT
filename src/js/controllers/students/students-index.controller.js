angular
  .module('yearBook')
  .controller('StudentsIndexCtrl', StudentsIndexCtrl);

StudentsIndexCtrl.$inject = [
  'Student',
  'filterFilter',
  '$scope'
];

function StudentsIndexCtrl(
  Student,
  filterFilter,
  $scope
){
  const vm = this;

  vm.students = Student.query();

  function filterStudents(){
    const params = { name: vm.q };

    vm.filtered = filterFilter(vm.students, params);
  }

  $scope.$watch(() => vm.q, filterStudents);

}
