const express = require("express");

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the entries.
router.route("/entry").get(function (req, res) {
  let db_connect = dbo.getDb("emotes");
  db_connect
    .collection("entries")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
      console.log(result);
    });
});

// This section will help you get a single entry by id
router.route("/entry/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("entries")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new entry.
router.route("/entry/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    emotion: req.body.emotion,
    body: req.body.body,
    hearts: req.body.hearts,
  };
  db_connect.collection("entries").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// // This section will help you update a entry by id.
// router.route("/update/:id").post(function (req, response) {
//   let db_connect = dbo.getDb();
//   let myquery = { _id: ObjectId( req.params.id )};
//   let newvalues = {
//     $set: {
//       person_name: req.body.person_name,
//       person_position: req.body.person_position,
//       person_level: req.body.person_level,
//     },
//   };
//   db_connect
//     .collection("entries")
//     .updateOne(myquery, newvalues, function (err, res) {
//       if (err) throw err;
//       console.log("1 document updated");
//       response.json(res);
//     });
// });

// This section will help you delete a entry
router.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("entries").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = router;