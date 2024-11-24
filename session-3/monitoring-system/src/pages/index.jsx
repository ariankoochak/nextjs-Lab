import { useRouter } from "next/router"

export default function index() {
  const router = useRouter();
  const handleClickAdminPanel = ()=>{
    router.push('/admin')
  }
    const handleClickProducts = () => {
        router.push("/products/all");
    };
  return (
      <div className="main-page">
          <button className="category-btn" onClick={handleClickAdminPanel}>admin panel</button>
          <button className="category-btn" onClick={handleClickProducts}>products</button>
      </div>
  );
}
