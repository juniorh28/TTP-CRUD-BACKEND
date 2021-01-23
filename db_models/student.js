const { Sequelize, Model } = require("sequelize");
const database = new Sequelize("CRUD", "postgres", "Inita809", {
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
    len: [0, 4],
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
