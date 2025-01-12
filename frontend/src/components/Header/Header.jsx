import React from 'react'

function Header() {
  return (
    <div className='bg-black text-white  font-serif w-screen  '>
      <div>
        <div className='w-screen bg-gray-950 text-center p-2 border-b border-gray-400'>
            <h1>Welcome to <span className=' hover:bg-green-400 hover:cursor-pointer text-blue-700 '>MyWeb</span> Codding  Challenge!</h1>
        </div>
        <div className='flex items-center justify-around w-screen  pt-4 '>
            <div className='text-3xl font-bold'>
                <h1>MyWeb <span className='bg-white p-1 text-black font-serif font-bold '>Solution</span></h1>
            </div>
            <div className='text-xl font-bold flex items-center justify-around  h-16 w-[45%]  hover:border-2 hover:border-gray-500 hover:rounded-lg  '>
                  <p className='hover:text-blue-500 hover:cursor-pointer transition duration-300 ease-linear'>Home</p>
                  <p className='hover:text-blue-500 hover:cursor-pointer transition duration-300 ease-linear'>Contest</p>
                  <p className='hover:text-blue-500 hover:cursor-pointer transition duration-300 ease-linear'>Result</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
