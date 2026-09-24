/**
 * - server ko start krna
 * - database se connect krna
 */

const app = require("./src/app");
const mongoose = require("mongoose");

function connectToDb() {
  mongoose.connect(
      "mongodb+srv://Lara:lzTKI5hrEWa2MOxw@cluster0.pxreiew.mongodb.net/day-6-90")
    .then(() => {
      console.log("Connected to Database");
    });
}

connectToDb();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
