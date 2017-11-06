angular
  .module('yearBook')
  .controller('StudentsNewCtrl', StudentsNewCtrl);

StudentsNewCtrl.$inject = ['Student', '$state'];

function StudentsNewCtrl(Student, $state){
  const vm = this;

  vm.submit = student => {
    Student
      .save(student)
      .$promise
      .then(()=> {
        $state.go('studentsIndex');
      });
  };

}
