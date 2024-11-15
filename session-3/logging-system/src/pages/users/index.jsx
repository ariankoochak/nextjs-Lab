import RenderUsers from "@/components/RenderUsers/RenderUsers";
import axios from "axios";
import { useEffect, useState } from "react";
import genLog from "../../../utils/genLog";

export default function index() {
  const [users,setUsers] = useState([]);
    const getUsers = () => {
        const API = `https://rickandmortyapi.com/api/character`;
        axios({
            method: "get",
            url: API,
        })
            .then((response) => {
                if (response.status === 200) {
                    setUsers(response.data.results);
                    genLog(response.status, "rickandmortyapi.com/api/character","localHost/users");
                }
            })
            .catch((error) => {
                // genLog(error.status, "rickandmortyapi.com/api/character","localHost/users");
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
