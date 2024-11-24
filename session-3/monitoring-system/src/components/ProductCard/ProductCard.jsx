import { useRouter } from "next/router";

const ProductCard = ({ item }) => {
    const router = useRouter();
    const handleClickProduct = (productId)=>{
        router.push(`/product/${productId}`)
    }
    return (
        <div key={item.id} className="card" onClick={()=>{handleClickProduct(item.id)}}>
            <img src={item.image} />
            <h3>{item.title}</h3>
            <p>category: {item.category}</p>
            <span>{item.price}</span>
        </div>
    );
};

export default ProductCard;
