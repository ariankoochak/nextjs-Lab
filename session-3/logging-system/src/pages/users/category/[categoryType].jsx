import RenderUsers from "@/components/RenderUsers/RenderUsers";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function index() {
    const [users, setUsers] = useState([]);
    const router = useRouter();
    const getCategory = (categoryType)=>{
        let queryTemplate = '?'
        switch (categoryType) {
            case "humans":
                queryTemplate += "species=human";
                break;
            case "alive":
                queryTemplate += "status=alive";
                break;
            case "male":
                queryTemplate += "gender=male";
                break;
            case "female":
                queryTemplate += "gender=female";
                break;
        }
        return queryTemplate
    }
    const getUsers = () => {
        const query = getCategory(router.query.categoryType)
        const API = `https://rickandmortyapi.com/api/character/${query}`;
        axios({
            method: "get",
            url: API,
        })
            .then((response) => {
                if (response.status === 200) {
                    setUsers(response.data.results);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        if (router.query.categoryType){
            getUsers();
        }
    }, [router.query.categoryType]);
    return (
        <div className="container">
            <RenderUsers users={users} />
        </div>
    );
}
