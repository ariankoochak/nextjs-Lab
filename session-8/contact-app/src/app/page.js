import Link from "next/link";

import "@/mongoose/mongoose.config";
import contactsModel from "@/mongoose/mongoose.model";

async function getContacts() {
  const contacts = await contactsModel.find({});
  return contacts;  
}

export default async function page() {
  const contacts = await getContacts();
  
  return (
    <>
    <Link href='/submit-contact'>
      <button>add new contact</button>
    </Link>
    {contacts.map((contact)=>{
      return (
          <>
              <div key={contact._id}>
                  <span>
                      name : {contact.Name} | Phone Number : {contact.PhoneNumber}
                  </span>
                  <br/>
                  <Link href={`/submit-contact/${contact._id}`}>Edit</Link>
                  <br />
                  <br />
                  <br />
                  <br />
              </div>
          </>
      );
    })}
    </>
  )
}
