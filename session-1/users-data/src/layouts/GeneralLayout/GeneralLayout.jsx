import Link from "next/link";

export default function GeneralLayout({ children }) {
    return (
        <>
            <header>
                <Link href="/" className="title">MY BRAND</Link>
                <nav>
                    <Link href="/">HOME</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/products">Products</Link>
                </nav>
            </header>
            <div className="container">{children}</div>
        </>
    );
}
