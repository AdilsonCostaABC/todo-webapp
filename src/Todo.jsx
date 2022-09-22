import React from 'react';
import {FaRegTrashAlt} from 'react-icons/fa';

const style={
  li:`flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete:`flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row:`flex `,
  text:`ml-2 cursor-pointer`,
  textComplete:`ml-2 cursor-pointer line-through`,
  button:`cusror-pointer flex items-center`

}

const Todo = ({todo7,toggleComplete,deleteTodo}) => {
  return (
    <li className={todo7.completed?style.liComplete:style.li}>
        <div className={style.row}>
            <input onChange={()=>toggleComplete(todo7)} type="checkbox"  checked={todo7.completed?'checked':''} />
            <p onClick={()=>toggleComplete(todo7)} className={todo7.completed?style.textComplete:style.text}>{todo7.text}</p>
        </div>
        <button onClick={()=>deleteTodo(todo7.id)}><FaRegTrashAlt/></button>
    </li>
  )
}

export default Todo;