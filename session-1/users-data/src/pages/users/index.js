import RenderUsers from "@/components/RenderUsers/RenderUsers";
import axios from "axios";
import { useEffect, useState } from "react";

export default function index() {
  const [users,setUsers] = useState([]);
    const getUsers = () => {
        const API = `https://rickandmortyapi.com/api/character`;
        axios({
            method: "get",
            url: API,
        })
            .then((response) => {
                console.log(response.data.results);
                if (response.status === 200) {
                    setUsers(response.data.results);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
      getUsers();
    }, []);
    return (
        <div className="container">
            <RenderUsers users={users} />
        </div>
    );
}
