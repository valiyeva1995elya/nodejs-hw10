const express = require("express");
const { UserModel } =require("../Models")
const router = express.Router();

router.get("/", (req, res) => {
    UserModel.find({}, (err, results) =>{
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).send(results)
        }
    })
})
router.get("/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findById(id, (err, result) =>{
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).send(result)
        }
    })
});
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete(id, (err) =>{
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).send("deleted")
        }
    })
});

router.post("/", (req, res) => {
    const { fullName, login, password } = req.body;
    const newUser = new UserModel({fullName, login, password});
    newUser.save((err) => {
        if(err){
            res.status(500).send(err);
        }else {
            res.status(201).send("ok")
        }
    });

})

module.exports = router;