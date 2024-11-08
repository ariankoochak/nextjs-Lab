import { useRouter } from "next/router";

export default function index({posts}) {
  const router = useRouter();
  const handleClickPost = (postId)=>{
    router.push(`/${postId}`)
  }
  return (
    <div>{posts.map((post)=>{
        return <div key={post.id} className="posts" onClick={()=>handleClickPost(post.id)}>
            <h3>{post.title}</h3>
        </div>
    })}</div>
  )
}

export async function getServerSideProps(){
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return {
      props : {
        posts
      }
    }
  } catch (error) {
    console.log(error);
  }
}
