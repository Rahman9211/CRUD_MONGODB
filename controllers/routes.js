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
        // console.log(result);
        res.render("showEmp", { list: result }); // passes data to view
    } catch (error) {
        console.log(error);
    }
});

// delete 

router.get("/delete-emp",async (req,res)=>{
    try{
        const result = await Employee.find()
        res.render("deleteEmp", {list : result})
    } catch (error) {
        console.log(error);
    }
})
router.get("/final-delete/:uid",async (req, res)=>{
    try {
        const result = await Employee.findByIdAndDelete(req.params.uid)
        console.log(result);

        // res.redirect("/emp/delete-emp")
    } catch (error) {
        console.log(error);
    }
})
//  update 

router.get("/updateEmp", async (req, res)=>{
  try {
    let result = await Employee.find()
    res.render("updateEmp", {list:result})
  } catch (error) {
    console.log(error)
  }
})

router.get("/editEmp/:id", async (req, res)=>{
  try {
    let result = await Employee.findById(req.params.id);
    console.log(result)
    res.render("editEmp", {result})
  } catch (error) {
    console.log(error)
  }
})

router.post("/updatedEmp/:id", async (req, res)=>{
  try {
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/emp/updateEmp");
  } catch (error) {
    console.log(error)
  }
})

// router.get("/update-Emp",async (req,res)=>{
//     let emp = await Employee.find();
//     res.render("updateEmp" , {emp});
// })
// router.get("/editEmployee/:id",async(req,res)=>{
//     try{
//         let employees = await Employee.findById(req.params.id);
//         res.render("editEmp",{Emp})
//     }catch(err){
//         console.log(err);
//     }
// })

module.exports = router;
