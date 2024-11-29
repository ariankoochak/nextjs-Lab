import Image from "next/image";
import Link from "next/link";

export default async function page() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const users = await response.json();

    return (
        <>
            {users.results.map((user) => {
                return (
                    <Link href={`/users/${user.id}`} key={user.id}>
                        <div className="user-container">
                            <div className="user-image-container">
                                <Image src={user.image} alt={user.name} fill />
                            </div>
                            <h4>{user.name}</h4>
                        </div>
                    </Link>
                );
            })}
        </>
    );
}
