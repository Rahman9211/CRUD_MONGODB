
const express = require("express");
const router = express.Router();
const Employee = require('../models/connection.model');

// Render the form
router.get("/add-emp", (req, res) => {
    res.render("addEmp");
});

// Handle form submission
router.post('/save-emp', async (req, res) => {
    try {
        const emp = new Employee({
            fullname: req.body.fullname,
            email: req.body.email,
            phone: req.body.mobile,
            city: req.body.city,
        });

        console.log(emp);

        await emp.save();
        res.redirect('/');
    } catch (err) {
        console.error('Error saving employee:', err);
        res.status(500).send('Error saving employee data');
    }
});

//show all employees
router.get("/show-all-emp", async (req, res) => {
    try {
        const result = await Employee.find();
        console.log(result);
        res.render("showEmp", { list: result }); // passes data to view
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;




















































// const express = require("express");
// const router = express.Router();
// const Student = require("../models/connection.model");
// router.get("/add-student", async (req, res) => {
//   res.render("addStudent");
// });
// router.post("/save-student", async (req, res) => {
//   try {
//     const student = new Student({
//       fullname: req.body.fullname,
//       email: req.body.email,
//       phone: req.body.mobile,
//       city: req.body.city,
//     });
//     await student.save();
//     res.redirect("/");
//   } catch (e) {
//     console.log(e);
//   }
// });

// //Show all students
// router.get("/show-all-students", async (req, res) => {
//   try {
//     const student = await Student.find();
//     // console.log(student);

//     res.render("showAllStudents", { list: student });
//   } catch (e) {
//     console.log(e);
//   }
// });

// //delete student

// router.get('/delete-student', async (req, res) => {
//   try {
//     const student= await Student.find();
//     res.render('deleteStudent', {list:student});
//   } catch (error) {
//     console.log(error);
    
//   }
// })

// router.get('/final-delete-student/:id', async (req, res) => {
//   try {
//    const student = await Student.findByIdAndDelete(req.params.id);
//    console.log(student);
    
//    res.redirect('/stu/delete-student');
//   } catch (error) {
//     console.log(error);
//   }
// })

// //Update Student
// router.get('/update-student', async (req, res) => {
//   try{
//     const student = await Student.find();
//     res.render('updateStudent', {list: student});
//   }catch(e){
//     console.log(e);
//   }
// })

// router.get('/edit-student/:id', async (req, res) => {
//   try{
//     const student = await Student.findById(req.params.id);
//     res.render('editStudent', { student});
//   }catch(e){
//     console.log(e);
//   }
// })
// router.post('/update-student/:id', async (req, res) => {
//   try{
//     await Student.findByIdAndUpdate(req.params.id,req.body);
//     res.redirect('/stu/update-student');
//   }catch(e){
//     console.log(e);
//   }
// });


// module.exports = router;
