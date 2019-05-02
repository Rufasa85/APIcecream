// Require mongoose
var mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ExampleSchema object
// This is similar to a Sequelize model
var IceCreamSchema = new Schema({
  flavor: {
    type: String,
  },
  eaten: Boolean
});

// This creates our model from the above schema, using mongoose's model method
var IceCream = mongoose.model("IceCream", IceCreamSchema);

// Export the Pizza model
module.exports = IceCream;
