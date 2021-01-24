const express = require("express");
const router = express.Router();
const models = require('../models')


router.post("/", (request, response, nextMiddleware) => {
  console.log(request.body)
  models.student_model.create({
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      gpa: request.body.gpa,
      img: request.body.img,
      campusId: request.body.campusId
    }).then((student) => {
      response.status(200).json(student);
    })
    .catch((err) => {
      response.status(500).json(err);
    });
});

router.get("/", (request, response, nextMiddleware) => {
  models.student_model
    .findAll()
    .then((students) => {
      response.status(200).json({
        message: "Sucesss",
        students,
      });
    })
    .catch((err) => {
      response.status(500).json().json(err);
    });
});

router.delete('/', (request, response, nextMiddleware) => {
  models.student_model.findByPk(request.body.id)
  .then(student => {
    if (!student) {
      return response.status(404).json({
        message: "student not found"
      })
    } 
    student.destroy();
    response.status(200)
    .json(student)
  })
  .catch(err => {
    response.status(500).json()
  })
})

module.exports = router;
