const { connection } = require("../utils/dbConnection");


function getStudents(req, res) {
    try {
        let query = "SELECT name,email,age from students";
        connection.query(query, (err, result) => {
            if (err) {
                throw err;
            } else {
                res.status(200).send(result);
            }

        })
    } catch (error) {
        console.log(error);
        res.status(400).send("something went worng");
    }
}
function addStudent(req, res) {


    let details = req.body;
    try {
        if (!details.name || !details.email || !details.age) {
            res.status(200).send("name,email,age must be required");
            return;
        }
        query = "INSERT INTO students(name,email,age) values(?,?,?)";
        connection.query(query, [details.name, details.email, details.age], (err, result) => {
            if (err) {
                throw err;
            } else {
                res.status(200).send(`student  is added`);
            }

        });

    } catch (error) {
        console.log(error);
        res.status(400).send("something went worng");
    }
}
function updateStudent(req, res) {
    let id = req.params.id;

    let { name, email, age } = req.body;
    try {
        let query = "SELECT * from students WHERE id=?";
        connection.query(query, [id], (err, result) => {
            if (err) {
                throw err;
            }
            if (result.length == 0) {
                res.status(400).send(`student id:${id} is not found`);
            } else {
                if (!name && !email && !age) {
                    res.status(200).send("name,email,age must be required");
                    return;
                }
                query = "UPDATE  students set name=?,email=?,age=? where id=?";
                connection.query(query, [name, email, age, id], (err, result) => {
                    if (err) {
                        throw err;
                    } else {
                        res.status(200).send(`student id:${id} is updated`);
                    }

                });
            }
        })

    } catch (error) {
        console.log(error);
        res.status(400).send("something went worng");
    }
}
function deleteStudent(req, res) {
    let id = req.params.id;
    try {
        let query = "SELECT * from students WHERE id=?";
        connection.query(query, [id], (err, result) => {
            if (err) {
                throw err;
            }
            if (result.length == 0) {
                res.status(400).send(`student id:${id} is not found`);
            } else {
                let query = "DELETE  from students where id=?";
                connection.query(query, [id], (err, result) => {
                    if (err) {
                        throw err;
                    } else {
                        res.status(200).send(`student id:${id} is deleted`);
                    }

                })
            }
        })

    } catch (error) {
        console.log(error);
        res.status(400).send("something went worng");
    }
}
function getStudent(req, res) {
    let id = req.params.id;
    try {
        let query = "SELECT name,email,age from students where id=?";
        connection.query(query, [id], (err, result) => {
            if (err) {
                throw err;
            } else {
                if (result.length == 0) {
                    res.status(200).send(`Student id:${id} is not found`);
                    return;
                }
                res.status(200).send(result);
            }

        })
    } catch (error) {
        console.log(error);
        res.status(400).send("something went worng");
    }
}

module.exports = { getStudent, getStudents, addStudent, updateStudent, deleteStudent };