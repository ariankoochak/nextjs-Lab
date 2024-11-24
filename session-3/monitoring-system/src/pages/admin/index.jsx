import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";

export default function index({ categories, products }) {
    const [selectedRecordTitle,setSelectedRecordTitle] = useState('category-all');
    const [viewData,setViewData] = useState([])
    function getLast7Days() {
        const days = [];
        const today = new Date();

        for (let i = 0; i < 7; i++) {
            const date = new Date();
            date.setDate(today.getDate() - i);
            days.push(date.toISOString().split("T")[0]);
        }

        return days.reverse();
    }

    const getData = async ()=>{
        let separatedRecordTitle = selectedRecordTitle.split("-");
        const basePath =
            separatedRecordTitle[0] === "category" ? "/products" : "/product";
        const dynamicPath = encodeURI(separatedRecordTitle[1]);
        const response = await fetch(
            `http://localhost:3000/api/getLog?route=${basePath}/${dynamicPath}`
        );
        const data = await response.json();
        setViewData(data);
    }

    useEffect(()=>{
        getData();
    },[selectedRecordTitle])
    
    const options = {
        chart: {
            type: "column",
        },
        title: {
            text: selectedRecordTitle,
        },

        accessibility: {
            point: {
                valueDescriptionFormat: "{xDescription}{separator}{value}",
            },
        },

        xAxis: {
            title: {
                text: "Date",
            },
            categories: getLast7Days(),
        },

        yAxis: {
            type: "logarithmic",
            title: {
                text: "Number of view",
            },
        },

        tooltip: {
            headerFormat: "<b>{series.name}</b><br />",
            pointFormat: "{point.y}",
        },

        series: [
            {
                name: "Views",
                keys: ["y"],
                data: viewData,
                color: {
                    linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 1,
                        y2: 0,
                    },
                    stops: [
                        [0, "#0000ff"],
                    ],
                },
            },
        ],
    };

    const handleClickCategoryButton = (categoryName)=>{
        setSelectedRecordTitle(`category-${categoryName}`)
    }

    const handleClickProductButton = (productName,productId) => {
        setSelectedRecordTitle(`product-${productId}`);
    };
    return (
        <div className="admin">
            <h2>Report</h2>
            <div className="container">
                <h3>Category Page</h3>
                <div className="admin-categories-btn-container">
                    {categories.map((category) => {
                        return <button onClick={()=>handleClickCategoryButton(category)}>{category}</button>;
                    })}
                </div>
            </div>
            <div className="container">
                <h3>Products Page</h3>
                <div className="admin-products-btn-container">
                    {products.map((product) => {
                        return <button onClick={()=>handleClickProductButton(product.title,product.id)}>{product.title}</button>;
                    })}
                </div>
            </div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
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