const student_model = require('./student')
const campus_model = require('./campus')

campus_model.hasMany(student_model)
student_model.belongsTo(campus_model)

campus_model.sync().then(() => {
  console.log("Campuse table created");
});

student_model.sync().then(() => {
  console.log("Student table created");
});

const models = {campus_model, student_model}

module.exports = models 