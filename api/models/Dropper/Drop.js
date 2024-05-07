const mongoose = require("mongoose");

const DropSchema = new mongoose.Schema({
    userId: { type : String, required: true },
    productname: { type: String, required: true, unique: true },
    desc: { type: String, required: true, max: 500 },
    productpic: { type: String, default: "" },
    likes: { type: Array, default: [] }
},
    { timestamps: true },
);

module.exports = mongoose.model("Drop", DropSchema);