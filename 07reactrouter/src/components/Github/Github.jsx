// import { useState, useEffect } from "react"
import { useLoaderData } from "react-router-dom"
const Github = () => {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/shivam1272')
    //   .then(response => response.json())
    //   .then(data => {
    //     setData(data)
    // })
    // }, [])
    const data = useLoaderData()
  return (
    <div className="text-start m-4 bg-gray-600 text-white p-4">
      <div className="flex justify-between mb-2">
        <img src={data.avatar_url} alt="git profile" width={30}/>
        <h3>{data.login}</h3>
      </div>
      <p>GitHub Followers: <span className="text-orange-500">{data.followers}</span></p>
      <p>Repo Count: <span className="text-orange-500">{data.public_repos}</span></p>
    </div>
  )
}

export default Github

