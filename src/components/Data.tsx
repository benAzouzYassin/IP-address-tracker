import React from 'react'

function Data() {
    return (
        <div className='z-[1000] left-[20%] bg-white shadow-xl w-3/5 absolute top-1/3 h-44 rounded-2xl p-10 grid grid-cols-4 '>
            <div className=''><h3 className='text-xs  text-gray-500 font-semibold'>IP ADDRESS</h3><p className='text-2xl mt-6 font-semibold'>192.127.1.1</p></div>
            <div className='border-l-2 border-solid pl-10'><h3 className='text-xs  text-gray-500 font-semibold'>LOCATION</h3><p className='text-2xl mt-6 font-semibold'>TUNISIA</p></div>
            <div className='border-l-2 border-solid pl-10'><h3 className='text-xs  text-gray-500 font-semibold'>TIMEZONE</h3><p className='text-2xl mt-6 font-semibold'>UTC +1:00</p></div>
            <div className='border-l-2 border-solid pl-10'><h3 className='text-xs  text-gray-500 font-semibold'>ISP</h3><p className='text-2xl mt-6 font-semibold'>ORANGE</p></div>
        </div>
    )
}

export default Data