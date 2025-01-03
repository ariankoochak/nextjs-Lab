'use server';
import "@/mongoose/mongoose.config"
import contactsModel from "@/mongoose/mongoose.model";
export const addContactAction = async (initialState,payload)=>{
    console.log(payload);
    const contactName = payload.get("contactName");
    const contactPhoneNumber = payload.get("contactPhoneNumber");
    const res = await contactsModel.create({Name : contactName,PhoneNumber:contactPhoneNumber});
}