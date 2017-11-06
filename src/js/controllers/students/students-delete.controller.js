angular
  .module('yearBook')
  .controller('StudentsDeleteCtrl', StudentsDeleteCtrl);

StudentsDeleteCtrl.$inject = [
  'Student',
  '$stateParams',
  '$state',
  'studentToDelete',
  '$uibModalInstance'
];

function StudentsDeleteCtrl(
  Student,
  $stateParams,
  $state,
  studentToDelete,
  $uibModalInstance
){
  const vm = this;

  vm.student = studentToDelete;

  vm.delete = () => {
    Student
      .remove($stateParams)
      .$promise
      .then( ()=> {
        $uibModalInstance.close();
        $state.go('studentsIndex');
      });
  };

  vm.close = () => {
    $uibModalInstance.close();
  };

}
