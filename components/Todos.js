import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, completeTodo, deleteCompletedTodos } from "../redux/todoSlice";

const filters = ['All', 'Active', 'Completed'];

export default function Todos() {
    const { todos } = useSelector((store) => store.todos);
    const dispatch = useDispatch();
    const [currentFilter, setCurrentFilter] = useState('All');

    const changeFilter = (newFilter) => {
        setCurrentFilter(newFilter)
    }

    const data = todos ? todos.filter((todo) => {
        switch (currentFilter) {
            case 'All':
                return true;
            case 'Active':
                return todo.completed === false;
            case 'Completed':
                return todo.completed === true;
            default:
                return true 
        }
    }) : null;

    const activeTodos = todos.filter((todo) => todo.completed === false);


  return (
    <div className="w-[90%] md:w-[50%] m-auto bottom-5 relative">
        <div className="shadow-xl rounded-lg overflow-hidden">
            <ul className="flex flex-col gap-[2px] bg-lightLgBlue/40 dark:bg-darkDgBlue/40">
                {data.map((todo) => (
                    <li key={todo.id} className="flex items-center px-3 py-4 bg-white dark:bg-darkVddBlue">
                        <span onClick={() => dispatch(completeTodo(todo.id))} className={todo.completed ? 'check' : 'uncheck'}>
                            {todo.completed && <img src="/images/icon-check.svg" alt="" />}
                        </span>
                        <p className={todo.completed ? "pl-3 text-sm font-bold line-through text-lightLgBlue dark:text-darkDgBlue" : "pl-3 text-sm font-bold text-lightVdgBlue dark:text-darkLgBlue"}>{todo.content}</p>
                        <img onClick={() => dispatch(deleteTodo(todo.id))} className="h-3 ml-auto" src="/images/icon-cross.svg" alt="" />
                    </li>
                ))}
                <li className="flex items-center px-5 py-4 bg-white dark:bg-darkVddBlue text-xs justify-between text-lightDgBlue font-bold">
                    <p>{activeTodos.length} items left</p>
                    <div className="items-center hidden md:flex md:gap-5 text-md justify-evenly text-lightDgBlue font-bold">
                        {filters.map((filter) => (
                            <button key={filter} className={currentFilter === filter ? "text-brightBlue": "dark:hover:text-darkLgBlue"} onClick={() => changeFilter(filter)}>{filter}</button>
                        ))} 
                    </div>
                    <button className="dark:hover:text-darkLgBlue" onClick={() => dispatch(deleteCompletedTodos())}>Clear Completed</button>
                </li>
                
            </ul>
        </div>

            <div className="flex items-center md:hidden px-10 py-4 bg-white dark:bg-darkVddBlue text-md justify-evenly mt-5 shadow-xl rounded text-lightDgBlue font-bold">
                {filters.map((filter) => (
                    <button key={filter} className={currentFilter === filter ? "text-brightBlue": "dark:hover:text-darkLgBlue"} onClick={() => changeFilter(filter)}>{filter}</button>
                ))}
            </div>
            <p className="text-lightDgBlue mt-10 w-[60%] m-auto">Drag and drop to reorder list</p>
    </div>
  )
}
