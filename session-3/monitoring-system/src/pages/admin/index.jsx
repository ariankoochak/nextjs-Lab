export default function index({categories , products}) {
    return <div>
        <h2>Report</h2>
    </div>;
}

export async function getServerSideProps() {
    const categoriesResponse = await fetch("https://fakestoreapi.com/products");
    const categoriesData = await categoriesResponse.json();

    const productsResponse = await fetch('https://fakestoreapi.com/products/categories');
    const productsData = await productsResponse.json();


    return {
        props:{
            categories : categoriesData,
            products : productsData,
        }
    }
}