import ProductCard from "@/components/ProductCard/ProductCard";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function category({ products }) {
    const [categories , setCategories] = useState([]);
    const pathname = usePathname();
    const router = useRouter();
    useSWR({url : '/addLog' , method : "post" , route : pathname})
    const getCategories = async ()=>{
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategories(data);
    }
    const handleClickCategory = (categoryName)=>{
        router.push(`/products/${categoryName}`)
    }
    useEffect(()=>{
        getCategories();
    },[])
    return (
        <>
            <div className="category-btn-container">
                <button
                    className="category-btn"
                    onClick={() => {
                        handleClickCategory("all");
                    }}
                >
                    All product
                </button>
                {categories.map((categoryName) => {
                    return (
                        <button
                            className="category-btn"
                            onClick={() => {
                                handleClickCategory(categoryName);
                            }}
                        >
                            {categoryName}
                        </button>
                    );
                })}
            </div>
            <section className="row">
                {products.map((item) => (
                    <ProductCard item={item} key={item.id} />
                ))}
            </section>
        </>
    );
}

export async function getStaticPaths() {
    const response = await fetch(
        "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();

    const pages = data.map((categoryName) => {
        return { params: { category: categoryName } };
    });

    pages.push({ params: { category: 'all' } });
    return {
        paths: pages,
        fallback: "blocking",
    };
}

export async function getStaticProps({ params }) {
    try {
        let response;
        if(params.category === 'all'){
            response = await fetch(`https://fakestoreapi.com/products`);
        }
        else{
            response = await fetch(
                `https://fakestoreapi.com/products/category/${encodeURI(params.category)}`
            );
        }
        const data = await response.json();
        return {
            props: {
                products: data,
            },
        };
    } catch (error) {
        console.log(error);
    }
}
