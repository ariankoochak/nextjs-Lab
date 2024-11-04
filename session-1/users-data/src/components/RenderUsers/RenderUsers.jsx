import { useRouter } from "next/router"

export default function RenderUsers({users}) {
  const router = useRouter();
  const handleClickUser = (userId)=>{
      router.push(`/${userId}`)
  }
  const renderUsers = (usersList)=>{
    return usersList.map((user)=>{
        return(
          <div className="user-container" onClick={()=>handleClickUser(user.id)}>
            <div className="user-image-container">
              <img src={user.image} alt={user.name}/>
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
