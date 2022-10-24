import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../redux/todoSlice"
import { changeTheme } from '../redux/themeSlice';
import moon from '../images/icon-moon.svg';
import sun from '../images/icon-sun.svg';

export default function Navbar() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const { theme } = useSelector((store) => store.theme)

  
  const toggleMode = () => {
    const action = theme === 'light' ? 'dark' : 'light';
    //console.log(action);
    dispatch(changeTheme(action))
  }

  const newTodo = {
    content: todo,
    id: Math.random(),
    completed: false
  }

  const handleForm = (e) => {
      e.preventDefault();
      dispatch(addTodo(newTodo))
      //console.log(newTodo);
      setTodo("");
  };

  return (
    <div className={theme === 'light' ? 'bg-bgmobilelight md:bg-bgdesktoplight bg-cover py-10' : `bg-bgmobiledark md:bg-bgdesktopdark bg-cover py-10`}>
      <div className='w-[90%] md:w-[50%] m-auto'>
        <div className='flex justify-between px-0 md:px-0 pt-16 items-center'>
          <h1 className='tracking-[0.5em] text-2xl text-white font-bold'>TODO</h1>
          <img onClick={() => toggleMode()} className='h-6 cursor-pointer' src={theme === 'light' ? '/images/icon-moon.svg' : '/images/icon-sun.svg'} alt="mode" />
        </div>

        <form onSubmit={(e) => handleForm(e)} className='flex gap-3 items-center mx-0 md:mx-0 px-4 py-4 rounded-lg md:mt-8 mt-5 bg-white dark:bg-darkVddBlue'>
          <span className='border-[1px] border-gray-300 dark:border-darkDgBlue rounded-full w-5 h-5'></span>
          <input onChange={(e) => setTodo(e.target.value)} value={todo} className='text-sm focus:outline-none dark:bg-darkVddBlue dark:text-darkLgBlue' type="text" placeholder='Create a new todo..'/>
        </form>
      </div>
    </div>
  )
}
