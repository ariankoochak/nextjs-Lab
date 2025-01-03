import "@/mongoose/mongoose.config";
import contactsModel from "@/mongoose/mongoose.model";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { contactId } = await req.json();    
    const contact = await contactsModel.findById(contactId);
    return NextResponse.json(contact);
}
