angular
  .module('yearBook')
  .controller('StudentsEditCtrl', StudentsEditCtrl);

StudentsEditCtrl.$inject = ['Student', '$state', '$stateParams'];

function StudentsEditCtrl(Student, $state, $stateParams) {
  const vm = this;

  vm.student = Student.get($stateParams);

  vm.submit = student => {
    Student
      .update({ id: student._id }, student )
      .$promise
      .then(() => {
        $state.go('studentsShow', { id: student._id} );
      });
  };
}
