const { Sequelize, Model } = require('sequelize')
const database = new Sequelize('posterior_chain', 'postgres', 'postgres', { host: 'localhost',dialect: 'postgres' });

try{
  database.authenticate();
  console.log("DB loaded successfully")
} catch (e){
  console.error(e)
}

const campus = database.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false 
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false 
  },
  info: {
    type: Sequelize.STRING,
    allowNull: true 
  },
  img: {
    type: Sequelize.STRING,
    allowNull: true 
  }
})

campus.sync().then(() => {
  console.log('New table created');
})

module.exports = campus;