angular
  .module('yearBook')
  .config(Router);

Router.$inject = [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider'
];

function Router(
  $stateProvider,
  $urlRouterProvider,
  $locationProvider){

  $locationProvider.html5Mode(true);
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/js/views/home.html',
      controller: 'StudentsHomeCtrl as vm'
    })
    .state('studentsIndex', {
      url: '/students',
      templateUrl: '/js/views/students/index.html',
      controller: 'StudentsIndexCtrl as vm'
    })
    .state('studentsShow', {
      url: '/students/:id',
      templateUrl: '/js/views/students/show.html',
      controller: 'StudentsShowCtrl as vm'
    })
    .state('studentsNew', {
      url: '/students',
      templateUrl: '/js/views/students/new.html',
      controller: 'StudentsNewCtrl as vm'
    })
    .state('studentsEdit', {
      url: '/students/:id/edit',
      templateUrl: '/js/views/students/edit.html',
      controller: 'StudentsEditCtrl as vm'
    })
    .state('studentsDelete', {
      url: '/students/:id',
      controller: 'StudentsDeleteCtrl as vm'
    });

  $urlRouterProvider.otherwise('/');

}
