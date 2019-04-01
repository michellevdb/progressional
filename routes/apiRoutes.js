var db = require("../models");

module.exports = function(app) {
  // Get all measurements
  app.get("/api/measurements", function(req, res) {
    db.Measurements.findAll({}).then(function(dbMeasurements) {
      res.json(dbMeasurements);
    });
  });

  // Create a new measurement
  app.post("/api/measurements", function(req, res) {
    db.Measurements.create(req.body).then(function(dbMeasurements) {
      res.json(dbMeasurements);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbMeasurements) {
      res.json(dbMeasurements);
    });
  });
};
