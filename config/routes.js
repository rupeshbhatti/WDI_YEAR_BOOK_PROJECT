const express = require('express');
const router = express.Router();

const studentsController = require('../controllers/students');

router.route('/students')
  .get(studentsController.index)
  .post(studentsController.create);
router.route('/students/:id')
  .get(studentsController.show)
  .put(studentsController.update)
  .patch(studentsController.update)
  .delete(studentsController.delete);

module.exports = router;
