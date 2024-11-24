import { useRouter } from "next/router";

export default function productId({ product }) {
    const router = useRouter();
    const handleClickCategoryBtn = () => {
        router.push(`/products/${product.category}`);
    };
    return (
        <div className="product-page">
            <div>
                <button onClick={handleClickCategoryBtn}>{product.category}</button>
            </div>
            <div className="image-container">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="data-container">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <h4>{product.price}$</h4>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { productId: "1" } }],
        fallback: "blocking",
    };
}

export async function getStaticProps({ params }) {
    try {
        const response = await fetch(
            `https://fakestoreapi.com/products/${params.productId}`
        );
        const data = await response.json();
        return {
            props: {
                product: data,
            },
        };
    } catch (error) {
        console.log(error);
    }
}
