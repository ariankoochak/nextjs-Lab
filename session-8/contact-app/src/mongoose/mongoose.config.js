const { default: mongoose } = require("mongoose");

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/nextJsContactApp");

mongoose.connection.on("open", () => {
    console.log("\nmongoose connected successfully");
});

mongoose.connection.on("error", (err) => {
    console.log(err);
    console.log("\nmongoose not connected");
});
