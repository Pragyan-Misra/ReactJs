import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  // const [data, setdata] =useState([])
  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${}`)
  //   .then( res => res.json())
  //   .then( data => {console.log(data);
  //     setdata(data)
  //   })
  // }, [])
  return (
    <div className='text-center bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data?.followers}
    <img src={data?.avatar_url} alt="Git Picture"  width={300}/>
    </div>
  )
}

export default Github

export const githubLoader = async () => {
   const response = await fetch(`https://api.github.com/users/Pragyan-Misra`);

   return response.json();
}