"use client";
import { useActionState } from "react";
import { addContactAction } from "../../../actions/AddContact";
import Link from "next/link";

export default function page() {
    const [data,dispatch,isPending] = useActionState(addContactAction,'initState')
  return (
      <div>
        <Link href={'/'}><button>back</button></Link>
          <form action={dispatch}>
              <input name="contactName" placeholder="Contact Name" />
              <input name="contactPhoneNumber" placeholder="Contact Phone Number" />
              <button type="submit">
                {isPending ? 'Loading' : 'Add contact'}
                </button>
                <br/>
                {data.message}
          </form>
      </div>
  );
}
