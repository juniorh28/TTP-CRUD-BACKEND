const { Sequelize, Model } = require("sequelize");
const database = new Sequelize("postgres", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});

try {
  database.authenticate();
  console.log("DB loaded successfully");
} catch (e) {
  console.error(e);
}

const student = database.define("student", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmail: true,
  },
  gpa: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  img: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

student.sync().then(() => {
  console.log("Student table created");
});

module.exports = student;
