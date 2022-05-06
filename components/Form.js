import React, {useState} from 'react'

const Form = ({handleTodo}) => {

  const [todo, setTodo] = useState({title: '', desc: ''});
  const {title, desc} = todo;

  const handleSubmit = (event) =>{
    event.preventDefault();
    handleTodo(todo)
    setTodo({title: '', desc: ''})
  }
  const handleChange = (event) =>{
    const name = event.target.name;
    setTodo((oldTodo) => {
      return{...oldTodo, [name]: event.target.value}
    })
  }

  return (
    <form className='gap-2 grid' onSubmit={handleSubmit}>
        <input name='title' value={title} onChange={handleChange} type='text' className='w-full border-2 rounded-sm p-2 border-indigo-600' placeholder='Enter a title'  />
        <textarea name='desc' value={desc} onChange={handleChange} type='text' className='w-full border-2 rounded-sm p-2 border-indigo-600' placeholder='Description' />
        <button type='submit' className='bg-indigo-600 text-white uppercase rounded-sm p-2 font-bold hover:bg-indigo-700'>Add TODO</button>
    </form>
  )
}

export default Form