import Image from "next/image";

export default async function page() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const users = await response.json();
    console.log(users.results);

    return (
        <>
            {users.results.map((user) => {
                return (
                    <div
                    key={user.id}
                        className="user-container"
                    >
                        <div className="user-image-container">
                            <Image src={user.image} alt={user.name} fill />
                        </div>
                        <h4>{user.name}</h4>
                    </div>
                );
            })}
        </>
    );
}
