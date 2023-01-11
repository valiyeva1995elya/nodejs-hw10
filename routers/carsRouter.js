const express = require("express");
const { CarModel } =require("../Models")
const router = express.Router();

router.get("/", (req, res) => {
    CarModel.find({}, (err, results) =>{
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).send(results)
        }
    })
})
// router.get("/", async (req, res) => {
//     const result = await CarModel.find({});
//     res.status(200).send(result)
// })
// router.delete("/:id", (req, res) => {
//     CarModel.findOneAndRemove({}, (err, results) =>{
//         if(err){
//             res.status(500).send(err);
//         } else {
//             res.status(200).send(results)
//         }
//     })
// })

router.post("/", (req, res) => {
    const { model, color, year } = req.body;
    const newCar = new CarModel({model, color, year});
    newCar.save((err) => {
        if(err){
            res.status(500).send(err);
        }else {
            res.status(201).send("ok")
        }
    });

})

module.exports = router;