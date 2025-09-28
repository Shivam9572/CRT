const { where } = require("sequelize");
const Students = require("../models/students");
const Courses = require("../models/courses");


async function getStudents(req, res) {
  try {
    let users = await Students.findAll();

    users = users.map(u => u.toJSON());
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(404).send("something went wrong");
  }
}
async function getStudent(req, res) {
  try {
    let id = req.params.id;
    let user = await Students.findOne({ where: { id: id } });
    if (user == null) {
      res.send("not user found");
      return;
    }

    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(404).send("something went wrong");
  }
}

async function addStudent(req, res) {
  try {
    let { name } = req.body;
    if (!name) {
      res.status(500).send("name are must be required");
    } else {
      let result = await Students.create({ name: name });
      res.status(200).send(result.toJSON());
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("something went wrong");
  }
}
async function deleteStudent(req, res) {
  let id = req.params.id;
  try {
    let result = await Students.destroy({ where: { id: id } });
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).send("error");
  }
}
async function updateStudent(req, res) {
  let id = req.params.id;
  try {
    let { name } = req.body;
    if (!name) {
      res.status(500).send("name are must be required");
    } else {
      let result = await Students.update({ name: name }, { where: { id: id } });
      res.status(200).json(result);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("something went wrong");
  }
}

async function addCourse(req, res) {
  try {
    let { name } = req.body;
    if (!name) {
      res.status(500).send("name are must be required");
    } else {
      let result = await Courses.create({ name: name });
      res.status(200).send(result.toJSON());
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("something went wrong");
  }
}
async function addCourseToStudent(req, res) {
  let { studentId, courseId } = req.body;
  try {
    let student = await Students.findByPk(studentId);
    let courses = await Courses.findAll({
      where: {
        id: courseId
      }
    });
   
     await Students.addCourse(courses);
    result = await Students.findByPk(studentId,{include:Courses});
   console.log(result);
    res.status(200).send(result);
  } catch (error) {

  }
}



module.exports = { getStudents, getStudent, deleteStudent, updateStudent, addStudent, addCourse, addCourseToStudent };