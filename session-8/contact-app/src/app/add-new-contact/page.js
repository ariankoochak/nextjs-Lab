"use client";
import { useActionState } from "react";
import { addContactAction } from "../../../actions/AddContact";

export default function page() {
    const [data,dispatch,isPending] = useActionState(addContactAction,'initState')
  return (
      <div>
          <form action={dispatch}>
              <input name="contactName" placeholder="Contact Name" />
              <input name="contactPhoneNumber" placeholder="Contact Phone Number" />
              <button type="submit">Add Contact</button>
          </form>
      </div>
  );
}
