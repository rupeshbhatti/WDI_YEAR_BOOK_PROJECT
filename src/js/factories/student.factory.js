angular
  .module('yearBook')
  .factory('Student', Student);

Student.$inject = ['API', '$resource'];

function Student(API, $resource){
  return $resource(`${API}/students/:id`, {
    id: '@_id'}, {
    update: { method: 'PUT' }
  });
}

/*FOR REFERENCE
get: { method: 'GET' }, // SHOW
save: { method: 'POST' }, // CREATE
remove: { method: 'DELETE' }, // DELETE
delete: { method: 'DELETE' }, // DELETE AGAIN FOR OLDER BROWERS
query: { method: 'GET', isArray: true } // INDEX*/
