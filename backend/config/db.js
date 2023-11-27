const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose
      .set("strictQuery", false)
      .connect(process.env.MONGO_URI, () =>
        console.log("Connexion à MongoDB réussie !")
      );
  } catch (err) {
    console.error(err);
    process.exit();
  }
};

module.exports = connectDB;
