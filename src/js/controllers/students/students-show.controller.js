angular
  .module('yearBook')
  .controller('StudentsShowCtrl', StudentsShowCtrl);

StudentsShowCtrl.$inject = [
  '$stateParams',
  'Student',
  '$uibModal'
];

function StudentsShowCtrl(
  $stateParams,
  Student,
  $uibModal
){
  const vm = this;

  vm.student = Student.get($stateParams);

  vm.openModal = openModal;

  function openModal(){
    $uibModal.open({
      templateUrl: '/js/views/modals/_studentDeleteModal.html',
      controller: 'StudentsDeleteCtrl as vm',
      resolve: {
        studentToDelete: () => {
          return vm.student;
        }
      }
    });
  }
}
