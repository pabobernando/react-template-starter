import React from 'react'
import Logo from '../img/logopabo.png'

function Home() {
  return (
    <div>
        <img src={Logo} className="mx-auto"/>
        <h1 className='text-center text-3xl'>Home Page</h1>
    </div>
  )
}

export default Home