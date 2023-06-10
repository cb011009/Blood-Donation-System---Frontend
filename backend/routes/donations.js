const router = require("express").Router();
let donation = require("../models/donation");

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const typeValue = req.body.typeValue;
    const location = req.body.location;
    const dateValue = req.body.dateValue;
    const pintsValue = req.body.pintsValue;

    const newdonation = new donation({
      name,
      typeValue,
      dateValue,
      location,
      pintsValue,
    });
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