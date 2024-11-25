import PageChart from "@/components/PageChart/PageChart";
import getLast7Days from "@/services/getLast7Days";
import { useEffect, useState } from "react";

export default function index({ categories, products }) {
    const [selectedRecordTitle,setSelectedRecordTitle] = useState('category-all');
    const [viewData,setViewData] = useState([])
    const getData = async ()=>{
        let separatedRecordTitle = selectedRecordTitle.split("-");
        const basePath =
            separatedRecordTitle[0] === "category" ? "/products" : "/product";
        const dynamicPath = encodeURI(separatedRecordTitle[1]);
        const response = await fetch(
            `http://localhost:3000/api/getLog/last-week?route=${basePath}/${dynamicPath}`
        );
        const data = await response.json();
        setViewData(data);
    }

    useEffect(()=>{
        getData();
    },[selectedRecordTitle])
    
    const handleClickCategoryButton = (categoryName)=>{
        setSelectedRecordTitle(`category-${categoryName}`)
    }

    const handleClickProductButton = (productName,productId) => {
        setSelectedRecordTitle(`product-${productId}`);
    };
    return (
        <>
            <div className="admin">
                <h2>Report</h2>
                <div className="container">
                    <h3>Category Page</h3>
                    <div className="admin-categories-btn-container">
                        {categories.map((category) => {
                            return (
                                <button
                                    onClick={() =>
                                        handleClickCategoryButton(category)
                                    }
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className="container">
                    <h3>Products Page</h3>
                    <div className="admin-products-btn-container">
                        {products.map((product) => {
                            return (
                                <button
                                    onClick={() =>
                                        handleClickProductButton(
                                            product.title,
                                            product.id
                                        )
                                    }
                                >
                                    {product.title}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
            <PageChart
                last7DaysArray={getLast7Days().reverse()}
                valuesArray={viewData}
                title={selectedRecordTitle}
            />
        </>
    );
}

export async function getServerSideProps() {
    const categoriesResponse = await fetch(
        "https://fakestoreapi.com/products/categories"
    );
    const categoriesData = await categoriesResponse.json();
    categoriesData.push("all");

    const productsResponse = await fetch("https://fakestoreapi.com/products");
    const productsData = await productsResponse.json();

    return {
        props: {
            categories: categoriesData,
            products: productsData,
        },
    };
}
