"use client";
import { useActionState, useEffect, useState } from "react";
import { addContactAction } from "../../../../actions/AddContact";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function page() {
    const pathname = usePathname();
    const contactId = pathname.split('/')[2];
    const [contactName,setContactName] = useState('')
    const [contactPhoneNumber,setContactPhoneNumber] = useState('')


    const [data,dispatch,isPending] = useActionState(addContactAction,'initState')

    const getContact = async ()=>{
      if (contactId) {
          const response = await fetch(
              "http://localhost:3000/api/get-contact",
              {
                  body: JSON.stringify({ contactId }),
                  method: "post",
              }
          );
          const result = await response.json();
          setContactName(result.Name);
          setContactPhoneNumber(result.PhoneNumber)
      }
    }

    useEffect(()=>{
      getContact();
    },[])
  return (
      <div>
        <Link href={'/'}><button>back</button></Link>
          <form action={dispatch}>
              <input name="contactName" placeholder="Contact Name" defaultValue={contactName}/>
              <input name="contactPhoneNumber" placeholder="Contact Phone Number" defaultValue={contactPhoneNumber}/>
              <input name="contactId" type="hidden" value={contactId}/>
              <button type="submit">
                {isPending ? 'Loading' : contactId ? 'update contact' : 'add contact'}
                </button>
                <br/>
                {data.message}
          </form>
      </div>
  );
}
