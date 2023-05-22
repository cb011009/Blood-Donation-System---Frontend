const router = require("express").Router();
const Donor = require("../models/donor");

router.route("/add").post(async (req, res) => {
  //add student
  const name = req.body.name;
  const telephone = parseInt(req.body.telephone);
  const NIC = req.body.NIC;
  const bloodtype = req.body.bloodtype;
  const password = req.body.password;
  const gender = req.body.gender;
  const dob = req.body.dob;
  const address = req.body.address;

  //check if it exists already
  const check = await Donor.findOne({
    NIC: NIC,
  });
  //res.json(check);

  if (check === null) {
    
    const newDonor = new Donor({
      name,
      gender,
      bloodtype,
      telephone,
      NIC,
      password,
      dob,
      address,
    })
    newDonor
      .save()
      .then(() => {
        res.json("1");
      })
      .catch((err) => {
        console.log(err);
      });
    

  } else {
    res.json("2")
    return;
  }
});

router.route("/").get((req, res) => {
  //get Donor info
  Donor.find()
    .then((donors) => {
      res.json(donors);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.route("/login").post(async (req, res) => {
  const NIC = req.body.NIC;
  const password = req.body.password;

  try {
    const check = await Donor.findOne({
      NIC: NIC,
      password: password,
    });
    if (check) {
      res.json("1");
    } else {
      res.json("2");
    }
  } catch (e) {
    res.json(e);
  }
});

module.exports = router;
