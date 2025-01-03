'use server';
import "@/mongoose/mongoose.config"
import contactsModel from "@/mongoose/mongoose.model";
export const addContactAction = async (initialState,payload)=>{
    console.log(payload);
    const contactName = payload.get("contactName");
    const contactPhoneNumber = payload.get("contactPhoneNumber");
    try {
        const res = await contactsModel.create({Name : contactName,PhoneNumber:contactPhoneNumber});
        return {
            status : 201,
            message: 'contact added successfully'
        }
    } catch (error) {
        return {
            status: 500,
            message: "we have error!",
        };
    }
}