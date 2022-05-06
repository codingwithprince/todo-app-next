import React from 'react'

const Lists = ({todos, handleDelete}) => {
  
  return (
    <div className='mt-[20px]'>
      {
        todos.map(item => item.title == '' ? null : <div key={item.id} className='flex justify-between items-center p-2 border-2 hover:bg-yellow-300 rounded bg-yellow-200 my-2'>
            <div className="desc text-left w-full px-5">
              <p className='text-2xl text-gray-600 uppercase'>{item.title}</p>
              <p>{item.desc}</p>
            </div>
            <button onClick={()=> handleDelete(item.id)}>Delete</button>
        </div>)
      }
    </div>
  )
}

export default Lists