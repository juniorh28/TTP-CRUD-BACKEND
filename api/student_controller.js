const express = require("express");
const student_model = require("../db_models/student");
const router = express.Router();

router.post("/", (request, response, nextMiddleware) => {
  console.log(request.body)
  student_model.create({
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      gpa: request.body.gpa
    }).then((student) => {
      response.status(200).json(student);
    })
    .catch((err) => {
      response.status(500).json(err);
    });
});

router.get("/", (request, response, nextMiddleware) => {
  student_model
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

module.exports = router;
