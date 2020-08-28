const db = require("../models")
const Task = db.tasks
const Op = db.Sequelize.Op

// Create and Save a new Task
exports.create = (req, res) => {
  // Validate request
  if (!req.body.label) {
    res.status(400).send({
      message: "Content can not be empty!"
    })
    return
  }

  // Create a Task
  const task = {
    id: req.body.id,
    label: req.body.label,
    done: req.body.done
  }

  // Save Task in the database
  Task.create(task)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Task."
      })
    })
}

// Retrieve all Tasks from the database.
exports.findAll = (req, res) => {
  const label = req.query.label
  var condition = label ? { label: { [Op.like]: `%${label}%` } } : null

  Task.findAll({ where: condition })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tasks."
      })
    })
}

// Find a single Task with an id
exports.findOne = (req, res) => {
  const id = req.params.id

  Task.findByPk(id)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Task with id=" + id
      })
    })
}

// Update a Task by the id in the request
exports.update = (req, res) => {
  const id = req.params.id

  Task.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Task was updated successfully."
        })
      } else {
        res.send({
          message: `Cannot update Task with id=${id}. Maybe Task was not found or req.body is empty!`
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Task with id=" + id
      })
    })
}

// Delete a Task with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id

  Task.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Task was deleted successfully!"
        })
      } else {
        res.send({
          message: `Cannot delete Task with id=${id}. Maybe Task was not found!`
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Task with id=" + id
      })
    })
}


