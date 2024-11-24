import ProductCard from "../ProductCard/ProductCard";

export default function Products({products}) {
  return (
      <section className="row">
          {products.map((item) => (
              <ProductCard item={item} key={item.id} />
          ))}
      </section>
  );
}
