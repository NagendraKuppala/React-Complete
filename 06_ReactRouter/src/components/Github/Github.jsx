//import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='flex items-center m-4 bg-gray-400 text-white p-4 text-3xl mx-5 rounded-lg'>
            <img className="rounded-full mx-5" src={data.avatar_url} alt="Git picture" width={300} />
            {data.login}
            <br />
            {data.bio}
    </div>
  )
}

export default Github
