import Image from "next/image";
import Link from "next/link";

export default async function ({params}) {
    const responses = await fetch(`https://rickandmortyapi.com/api/character/${params.userId}`);
    const user = await responses.json();
    return (
        <div className="container">
          <Link href="/users"><button>Back</button></Link>
            <div className="user-page-image-container">
                <Image src={user.image} alt={user.name} fill />
            </div>
            <div className="user-page-data-container">
                <h2>{user.name}</h2>
                <div>
                    status : <span>{user.status}</span>
                </div>
                <div>
                    species : <span>{user.species}</span>
                </div>
                <div>
                    gender : <span>{user.gender}</span>
                </div>
                <div>
                    origin : <span>{user.origin.name}</span>
                </div>
            </div>
        </div>
    );
}
