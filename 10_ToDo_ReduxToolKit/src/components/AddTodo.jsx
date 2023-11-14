import { useDispatch } from "react-redux"
import { addTodos } from "../features/todoSlice";
import { useState } from "react";

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch(); 

    const handleAdd = (e) => {
        e.preventDefault()
        dispatch(addTodos(input))
        setInput('')
    }

  return (
    <form onSubmit={handleAdd} className="space-x-3 mt-12 my-3">
        <input 
            type="text"
            placeholder="Add Todo..."
            className='add-todo bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            value={input}
            onChange={(e)=> setInput(e.target.value)}
        />
        <button type="submit" className="text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Add
        </button>
    </form>
  )
}

export default AddTodo