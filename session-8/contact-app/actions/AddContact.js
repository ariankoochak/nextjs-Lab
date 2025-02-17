'use server';
import "@/mongoose/mongoose.config"
import contactsModel from "@/mongoose/mongoose.model";
import { isPhoneNumber } from "valiend";
export const addContactAction = async (initialState,payload)=>{
    const contactName = payload.get("contactName");
    const contactId = payload.get("contactId");
    const contactPhoneNumber = payload.get("contactPhoneNumber");
    const isValidPhoneNumber = isPhoneNumber(contactPhoneNumber,['fa-IR']);
    if(!isValidPhoneNumber){
        return {
            status : 400,
            message : 'phone number is not valid!'
        }
    }
    try {
        if(contactId){
            const res = await contactsModel.updateOne({_id : contactId},{$set : {Name : contactName,PhoneNumber : contactPhoneNumber}});
            return {
                status: 201,
                message: "contact updated successfully",
            };
        }
        else{
            const res = await contactsModel.create({Name : contactName,PhoneNumber:contactPhoneNumber});
            return {
                status : 201,
                message: 'contact added successfully'
            }
        }
    } catch (error) {
        return {
            status: 500,
            message: "we have error!",
        };
    }
}