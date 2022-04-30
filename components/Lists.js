import React from 'react'

const Lists = ({todo}) => {
  return (
    <div className='mt-[20px]'>
      {
        todo.map(item => <div key={item.id} className='flex justify-between items-center p-2 border-2 hover:bg-yellow-300 rounded bg-yellow-200 my-2'>
            <p className='bg-indigo-600 text-white rounded-full w-[40px] h-[40px] font-bold items-center flex justify-center'>{item.id}</p>
            <div className="desc text-left w-full px-5">
              <p className='text-2xl text-gray-600 uppercase'>{item.title}</p>
              <p>{item.desc}</p>
            </div>
            <button>Delete</button>
        </div>)
      }
    </div>
  )
}

export default Lists