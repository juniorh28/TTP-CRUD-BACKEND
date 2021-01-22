const express = require('express');
const campus_model = require('../db_models/campus')
const router = express.Router();

router.post('/', (request, response, nextMiddleware) => {
  console.log(request.body.name)
  campus_model.create({
    name: request.body.name,
    info: request.body.info,
    address: request.body.address,
    img: request.body.img
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
    response.status(500)
    .json({
      message: "An error has occured.", err
    })
  })
})


module.exports = router 

