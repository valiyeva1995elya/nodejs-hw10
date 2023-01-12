const express = require("express");
const { CarModel, UserModel } =require("../Models")
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
// });

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    CarModel.findByIdAndDelete(id, (err) =>{
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).send("deleted");
        }
    })
});

router.post("/", async (req, res) => {
    const { model, color, year, userId } = req.body;
    const owner = await UserModel.findById(userId);
    const newCar = new CarModel({model, color, year, owner, ownersHistory: []});
    newCar.save((err) => {
        if(err){
            res.status(500).send(err);
        }else {
            res.status(201).send("ok")
        }
    });

});

router.post("/changeOwner", async  (req, res) => {
    const { newOwnerId, carId } = req.body;
    const car = await CarModel.findById(carId);
    const newOwner = await UserModel.findById(newOwnerId);

    const currentOwner = car.owner;
    car.owner = newOwner;
    car.ownersHistory.push(currentOwner);

    car.save((err) => {
        if(err){
            res.status(500).send(err);
        }else {
            res.status(201).send("updated")
        }
    });
});

module.exports = router;