import { useRouter } from "next/router";

export default function index({ characters }) {
    const router = useRouter();
    const handleClickUser = (id) => {
        router.push(`user/${id}`);
    };
    return (
        <div className="main-container">
            {characters.map((character) => {
                return (
                    <div className="user-container" key={character.name} onClick={()=>handleClickUser(character.id)}>
                        <div className="user-image">
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div className="user-name">
                            <h3>{character.name}</h3>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export async function getServerSideProps() {
    try {
        const response = await fetch(
            "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        return {
            props: {
                characters: data.results,
            },
        };
    } catch (error) {
        console.log(error);
    }
}
