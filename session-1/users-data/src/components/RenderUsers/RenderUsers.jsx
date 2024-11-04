import Image from "next/image";
import { useRouter } from "next/router"

export default function RenderUsers({users}) {
  const router = useRouter();
  const handleClickUser = (userId)=>{
      router.push(`/users/${userId}`)
  }
  const renderUsers = (usersList)=>{
    return usersList.map((user)=>{
        return(
          <div className="user-container" onClick={()=>handleClickUser(user.id)}>
            <div className="user-image-container">
              <Image src={user.image} alt={user.name} fill/>
            </div>
            <h4>{user.name}</h4>
          </div>
        )
    })
  }
  return (
    <div className="users-container">
      {renderUsers(users)}
    </div>
  )
}
