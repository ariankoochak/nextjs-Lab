import { useRouter } from "next/router";

export default function UserPage({ data }) {
    const router = useRouter();
    const handleClickBackToUser = ()=>{
        router.push('/');
    }
    return (
        <>
        <div className="button-container">
            <button onClick={handleClickBackToUser}>Back to Users</button>
        </div>
        <div className="user-page">
            <div className="user">
                <div className="image">
                    <img src={data.image} alt={data.name} />
                </div>
                <div className="datas">
                    <h3 className="name">{data.name}</h3>
                    <div className="status">status : {data.status}</div>
                    <div className="species">species : {data.species}</div>
                    <div className="gender">gender : {data.gender}</div>
                </div>
            </div>
        </div>
        </>
    );
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { userId: "1" } }],
        fallback: "blocking",
    };
}

export async function getStaticProps({ params }) {
    try {
        const response = await fetch(
            `https://rickandmortyapi.com/api/character/${params.userId}`
        );
        const data = await response.json();
        return {
            props: { data },
        };
    } catch (error) {
        console.log(error);
    }
}
