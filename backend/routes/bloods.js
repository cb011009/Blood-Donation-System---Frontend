const router = require("express").Router();
let blood = require("../models/blood");

router.route("/add").post((req,res)=>{
    const oPositive = parseInt(req.body.oPositive);
    const oNegative = parseInt(req.body.oNegative);
    const aNegative = parseInt(req.body.aNegative);
    const aPositive = parseInt(req.body.aPositive);
    const bNegative = parseInt(req.body.bNegative);
    const bPositive = parseInt(req.body.bPositive);
    const abNegative = parseInt(req.body.abNegative);
    const abPositive = parseInt(req.body.abPositive);
    const username = req.body.username;

    const newblood = new blood({
        username,
        oPositive,
        oNegative,
        aPositive,
        aNegative,
        bPositive,
        bNegative,
        abPositive,
        abNegative
    })
    newblood.save().then(()=>{
        res.json("blood added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{//
    blood.find().then((bloods)=>{
        res.json(bloods)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route("/delete/:id").delete((req, res) => {
    const id = req.params.id;
    blood.findOneAndDelete({ _id: id })
      .then(() => {
        res.json("blood document deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  });

  router.put("/update/:username", async (req, res) => {
    const username = req.params.username;
    const { oPositive,oNegative,aPositive,aNegative,bPositive,bNegative,abPositive,abNegative } = req.body;
  
    try {
      const updatedblood = await blood.findOneAndUpdate(
        { username }, // Find the blood by name
        { oPositive,oNegative,aPositive,aNegative,bPositive,bNegative,abPositive,abNegative }, // Update the fields
        { new: true } // Return the updated blood object
      );
      res.status(200).send({ status: "blood updated", data: updatedblood });
    } catch (err) {
      res.status(500).send({ status: "Error", error: err.message });
    }
  });

module.exports = router;