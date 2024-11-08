import { useRouter } from "next/router";

export default function postId({ post }) {
    const router = useRouter();

    const handleBackButton = () => {
        router.push('/')
    };
    return (
        <div className="post">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={handleBackButton}>Back!</button>
        </div>
    );
}

export async function getServerSideProps(context) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${context.query.postId}`
        );
        const post = await response.json();
        return {
            props: {
                post,
            },
        };
    } catch (error) {
        console.log(error);
    }
}
