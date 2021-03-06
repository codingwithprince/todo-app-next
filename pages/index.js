import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Form from '../components/Form'
import Lists from '../components/Lists'
import {v4 as uuidv4} from 'uuid'

export default function Home() {

  const [todos, setTodos] = useState([]);

  const handleTodo = (todo) =>{
    setTodos((prevTodo) => {
      return[...prevTodo, {id:uuidv4() , ...todo} ]
    })
  }

  const handleDelete = (id) =>{
    const filteredTodos = todos.filter((todo)=> todo.id != id)
    setTodos(filteredTodos)
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-[50%] m-auto'>
        <h1 className='text-center m-10 text-indigo-500 font-bold text-4xl'>TODO APP</h1>
        {/* === INPUT === */}
        <Form handleTodo={handleTodo} />
        {/* === List of todos */}
        <Lists todos={todos} handleDelete={handleDelete} />
      </main>
    </div>
  )
}
