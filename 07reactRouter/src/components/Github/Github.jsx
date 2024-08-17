import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/hiteshchoudhary').
    //   then(response => response.json()).
    //   then(data =>{
    //     console.log(data);
    //     setData(data)
        
    //   })
    // }, [])
    

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    Github Followers : {data.followers}
    <img src="{data.avatar_url}" alt="Git Picture" width={300} />
    </div>
  )
}

export default Github

//optimize way to fetch api
export const githubloaderinfo =  async() => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}

// in 2way at first githubloaderinfo after called by in main.jsx that get data and forward
// to useLoaderData then after go to const data = useLoaderData() and then go to return data
// and reflect in ui