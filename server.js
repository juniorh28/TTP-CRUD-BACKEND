const express = require ('express');
const cors = require('cors')
const app = express();


const PORT = 8081

// global middleware.
app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

// if mount path starts with '/api', then load the api module. 
app.use('/api', require('./api'))

// listen at the port number specified in PORT 
app.listen(8081, () => {
  console.log(`listening at port ${PORT}`)
})