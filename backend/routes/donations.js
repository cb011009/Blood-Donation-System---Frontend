const router = require("express").Router();
let donation = require("../models/donation");

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const bloodtype = req.body.bloodtype;
    const location = req.body.location;
    const date = req.body.date;
    const quantity = req.body.quantity;

    const newdonation = new donation({
        name,
        bloodtype,
        date,
        location,
        quantity
    })
    newdonation.save().then(()=>{
        res.json("donation added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    donation.find().then((donations)=>{
        res.json(donations)
    }).catch((err)=>{
        console.log(err)
    })
})



module.exports = router;