export default function index({categories , products}) {    
    return (
        <div className="admin">
            <h2>Report</h2>
            <div className="container">
                <h3>Category Page</h3>
                <div className="admin-categories-btn-container">
                    {categories.map((category) => {
                        return <button>{category}</button>;
                    })}
                </div>
            </div>
            <div className="container">
                <h3>Products Page</h3>
                <div className="admin-products-btn-container">
                    {products.map((product) => {
                        return <button>{product.title}</button>;
                    })}
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const categoriesResponse = await fetch("https://fakestoreapi.com/products/categories");
    const categoriesData = await categoriesResponse.json();
    categoriesData.push('all')

    const productsResponse = await fetch('https://fakestoreapi.com/products');
    const productsData = await productsResponse.json();

    return {
        props:{
            categories : categoriesData,
            products : productsData,
        }
    }
}