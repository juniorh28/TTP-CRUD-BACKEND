const express = require('express');
const campus_model = require('../db_models/campus')
const router = express.Router();

router.post('/', (request, response, nextMiddleware) => {
  campus_model.create({
    name: request.body.name,
    info: request.body.info,
    address: request.body.address,
    img: request.body.img
  }).then(campus => {
    response.status(200).json(campus)
  }).catch(err => {
    response.status(500).json(err)
  })
})


router.get('/', (request, response, nextMiddleware) => {
  campus_model.findAll()
  .then(campuses => {
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
  campus_model.findByPk(request.body.id)
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
  campus_model.findByPk(request.body.campus.id)
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
    response.status(200)
    .json(campus)
  }).catch(err => {
    response.status(500).json()
  })
}) 


module.exports = router 

