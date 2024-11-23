import ProductCard from "@/components/ProductCard/ProductCard";
import useSWR from "swr"

export default function index() {
  const { data, isLoading, error } = useSWR({ url: "/products" , method : 'get'});

  if(isLoading) 
    return <div>Loading...</div>
  
  return (
      <section className="row">
          {data.map((item) => (
              <ProductCard item={item} key={item.id} />
          ))}
      </section>
  );
}
