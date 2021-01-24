const express = require('express');
const router = express.Router();
const models = require('../models')


router.post('/', (request, response, nextMiddleware) => {
  models.campus_model.create({
    name: request.body.name,
    info: request.body.info,
    address: request.body.address,
    img: request.body.img,
    campus: request.body.campusId
  }).then(campus => {
    response.status(200).json(campus)
  }).catch(err => {
    response.status(500).json(err)
  })
})


router.get('/', (request, response, nextMiddleware) => {
  models.campus_model.findAll({
    include: {
      model: models.student_model,
  }})
  .then(campuses => {
    console.log("HERE____________",)
    response.status(200)
    .json({
      message:"Sucesss", campuses
    })
  })
  .catch(err => {
    response.status(500).json()
    .json(err)
  })
})

router.delete('/', (request, response, nextMiddleware) => {
  models.campus_model.findByPk(request.body.id)
  .then(campus => {
    if (!campus) {
      return response.status(404).json({
        message: "campus not found"
      })
    } 
    campus.destroy();
    response.status(200)
    .json(campus)
  })
  .catch(err => {
    response.status(500).json()
  })
})

router.put('/', (request, response, nextMiddleware) => {
  console.log(request.body.campus.id)
  models.campus_model.findByPk(request.body.campus.id)
  .then(campus => {
    if (!campus) {
      return response.status(404).json({
        message: "campus not found"
      })
    }
    campus.update({
      name: request.body.campus.name,
      info: request.body.campus.info,
      address: request.body.campus.address,
      img: request.body.campus.img
    })
    campus.save();

    models.campus_model.findAll({
      include: {
        model: models.student_model,
    }}).then(campuses => {
      response.status(200)
      .json({
        message:"Sucesss", campuses
      })
    })
  }).catch(err => {
    response.status(500).json()
  })
}) 


module.exports = router 

