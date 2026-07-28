import { useEffect, useState } from "react";
import Create from "./Create"
import { BsCircleFill , BsFillTrashFill} from "react-icons/bs";
import { FaCircleCheck } from "react-icons/fa6";
import axios from 'axios'

function Home() {

    const [todos, setTodos] = useState([
      // { id: 1,
      //   task : 'BUGGA',
      //   completed: false,

      // },
      // { id: 3,
      //   task : 'BUGGA',
      //   completed: false,

      // },{ id: 2,
      //   task : 'BUGGA',
      //   completed: true,

      // }
    ]);


    useEffect(() => {
       axios.get('http://localhost:3000/api/v1/todos')
      .then(result => setTodos(result.data)
      
      )
      .catch(err => console.log(err))  
    }, [])
    
    // let todos = 1
    const handleEdit = (id,completed)=>{

        axios.put('http://localhost:3000/api/v1/todos/'+id,{
          completed: !completed
        })
      .then(result => {
        location.reload();
        
        console.log(result.message)
      }
      )
      
      
      .catch(err => console.log(err))

        
    }

    const handleDelete = (id)=>{

        axios.delete('http://localhost:3000/api/v1/todos/'+id)
      .then(result => {
        location.reload();
        
        console.log(result.message)
      }
      )
      
      
      .catch(err => console.log(err))
      

    }

  return (
    <div className="home">
      <h2> Todo List</h2>
      <Create/>

      {
        todos.length === 0 
        ?
        <div className=""><h2>No Record </h2></div>
        :

        todos.map(todo => (
            <div className="task" key={todo.id}>

                <div className="checkbox" onClick={()=> handleEdit(todo._id, todo.completed)}>
                    {todo.completed === true ? <FaCircleCheck />
                    : 
                    <BsCircleFill className="icon" />
                    
                    
                    }
                    <p className={todo.completed ? "line": ""}>{todo.title}</p>
                </div>
                <div className="d" >
                    <span><BsFillTrashFill  className="icon" onClick={()=> handleDelete(todo._id)}/></span>
                </div>

                {/* {todo} */}
            </div>
        ))
      }

    </div>
  )
}

export default Home
