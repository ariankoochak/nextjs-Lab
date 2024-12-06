import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = {
    title: "Products",
};

export default async function page() {
    const response = await fetch("https://fakestoreapi.com/products", {
        cache: "no-cache",
    });
    const products = await response.json();
    return (
        <div>
            {products.map((product) => (
              <Link href={`/${product.category}/${product.id}`}>
                <div className="product-card" key={product.id}>
                    <div className="image-container">
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                    </div>
                </div>
              </Link>
            ))}
        </div>
    );
}
