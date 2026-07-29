
import {useState} from 'react'
import axios from 'axios'

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Create() {

    const [title, setTitle] = useState();


  
    const handleCreateTodoTitle = ()=>{
      console.log('create Title got hit');
      
    axios.post(`${VITE_API_BASE_URL}/todos`,{ title:title})

      .then(result => {
        console.log(result)
        location.reload();
      
      }
      )
      .catch(err => console.log(err))

      setTitle(' ')

    }
  return (
    <div className='create_form'>
        <input type="text"  value={title}  placeholder='Enter Todo' onChange={(e)=> setTitle(e.target.value)}/>
    
        <button type='button' onClick={handleCreateTodoTitle}> Add Todo</button>
    </div>
  )
}

export default Create
