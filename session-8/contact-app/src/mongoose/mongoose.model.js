const { Schema, model } = require("mongoose");

const contactsSchema = new Schema(
    {
        Name: { type: String, trim: true, minLength: 2 },
        PhoneNumber: {
            type: String,
        },
    },
    { timestamps: true }
);

const contactsModel = model("contacts", contactsSchema);
export default contactsModel;
