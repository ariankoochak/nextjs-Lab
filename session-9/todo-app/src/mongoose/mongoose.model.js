import { Schema, model, models } from "mongoose";

const tasksSchema = new Schema(
    {
        Title: { type: String, trim: true, minLength: 2 },
        Body: {
            type: String,
        },
        IsDone: {
            type: Boolean,
            default : false,
        },
    },
    { timestamps: true }
);


const tasksModel = models.tasks || model("tasks", tasksSchema);

export default tasksModel;
