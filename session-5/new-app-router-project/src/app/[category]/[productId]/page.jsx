import Link from "next/link";
import { notFound } from "next/navigation";


export const generateStaticParams = async ()=>{
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();

    return data.slice(0,10).map((product)=>{
        return {category : product.category , productId : String(product.id)}
    })
}


export const generateMetadata = async ({ params }) => {
    try {
        const productId = (await params).productId;
        const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const product = await res.json();
    
        return {
            title: product.title,
        };
    } catch (error) {
        notFound();
    }
};

export default async function page({ params }) {
    const productId = (await params).productId;
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`, {
        cache: "no-cache",
    });
    
    const product = await res.json();
    return (
        <div>
            <div className="product-image-container">
                <img src={product.image} alt={product.title} />
            </div>
                <h2>{product.title}</h2>
                <h3>{product.price}</h3>
            <Link href={'/'}>Go Back</Link>
        </div>
    );
}
