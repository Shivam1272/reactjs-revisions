import { useParams } from "react-router-dom"
const User = () => {
    const {userid} = useParams();
  return (
    <div className="w-full h-[400px] m-auto bg-white text-orange-500 flex items-center justify-center text-center text-5xl">
      User: {userid}
    </div>
  )
}

export default User
