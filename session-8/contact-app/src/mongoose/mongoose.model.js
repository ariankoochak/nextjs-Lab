import { Schema, model, models } from "mongoose";

const contactsSchema = new Schema(
    {
        Name: { type: String, trim: true, minLength: 2 },
        PhoneNumber: {
            type: String,
        },
    },
    { timestamps: true }
);


const contactsModel = models.contacts || model("contacts", contactsSchema);

export default contactsModel;
