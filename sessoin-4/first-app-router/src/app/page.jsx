import Link from "next/link";


export default function page() {
  return (
    <div>
      <Link href={'/users'}>
        <button>Go to users!</button>
      </Link>
    </div>
  )
}
