const router = require("express").Router();
let BloodBank = require("../models/bloodBank");

router.route("/add").post(async (req, res) => {
  const name = req.body.name;
  const telephone = parseInt(req.body.telephone);
  const username = req.body.username;
  const district = req.body.district;
  const password = req.body.password;
  const address = req.body.address;
  //chk
  const check = await BloodBank.findOne({
    username: username,
  });
  //res.json(check);

  if (check === null) {
    const newBloodBank = new BloodBank({
      name,
      district,
      telephone,
      username,
      password,
      address,
    });
    newBloodBank
      .save()
      .then(() => {
        res.json("1");
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    res.json("2");
    return;
  }
});

router.route("/").get((req, res) => {
  //get BloodBank info
  BloodBank.find()
    .then((BloodBanks) => {
      res.json(BloodBanks);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.route("/login").post(async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const check = await BloodBank.findOne({
      username: username,
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
