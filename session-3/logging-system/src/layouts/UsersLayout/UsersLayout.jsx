import Link from "next/link";

export default function UsersLayout({children}) {
  return (
      <>
          <header>
              <Link href="/" className="title">
                  MY BRAND
              </Link>
              <nav>
                  <Link href="/users">All users</Link>
                  <Link href="/users/category/humans">humans</Link>
                  <Link href="/users/category/alive">Alive users</Link>
                  <Link href="/users/category/male">Males</Link>
                  <Link href="/users/category/female">Females</Link>
              </nav>
          </header>
          <div className="container">{children}</div>
      </>
  );
}
