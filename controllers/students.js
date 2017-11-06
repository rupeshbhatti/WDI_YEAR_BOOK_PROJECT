const Student = require('../models/student');

function studentsIndex(req, res) {
  Student
    .find()
    .exec()
    .then(students => res.status(200).json(students))
    .catch(() => res.status(500).json({ message: 'Something went wrong with the server'}));
}

function studentsShow(req, res) {
  Student
    .findById(req.params.id)
    .exec()
    .then(student => res.status(200).json(student))
    .catch(() => res.status(500).json({message: 'Something went wrong.'}));
}

function studentsCreate(req, res) {
  Student
    .create(req.body)
    .then(student => res.status(201).json(student))
    .catch(() => res.status(500).json({message: 'Something went wrong.'}));
}

function studentsUpdate(req, res) {
  Student
    .findByIdAndUpdate(req.params.id, req.body, {new: true})
    .exec()
    .then(student => res.status(200).json(student))
    .catch(() => res.status(500).json({message: 'Something went wrong.'}));
}

function studentsDelete(req, res) {
  Student
    .findByIdAndRemove(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(() => res.status(500).json({message: 'Something went wrong.'}));
}

module.exports = {
  index: studentsIndex,
  create: studentsCreate,
  show: studentsShow,
  update: studentsUpdate,
  delete: studentsDelete
};
