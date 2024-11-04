import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function index() {
    const router = useRouter();
    const [user, setUser] = useState({});
    const getUserById = (userId) => {
        const API = `https://rickandmortyapi.com/api/character/${userId}`;
        axios({
            method: "get",
            url: API,
        })
            .then((response) => {
                console.log(response.data);
                
                if (response.status === 200) {
                    setUser(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        if (router.query.userId) {
            getUserById(router.query.userId);
        }
    }, [router.query.userId]);

    if (Object.keys(user).length === 0) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="container">
                <div className="user-page-image-container">
                    <Image src={user.image} alt={user.name} fill/>
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
}
