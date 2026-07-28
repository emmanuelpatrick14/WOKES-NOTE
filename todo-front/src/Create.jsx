
import {useState} from 'react'
import axios from 'axios'
function Create() {

    const [title, setTitle] = useState();


  const handleCreateTodoTitle =()=>{
    axios.post('http://localhost:3000/api/v1/todos',{ title:title})
    .then(result => {
      console.log(result);
      
    } )
    .catch(err => console.log(err)
    )


  }
    // const handleCreateTodoTitle = ()=>{
    //   console.log('create Title got hit');
      
    //   axios.post('http://localhost:3000/api/v1/todos',{ title: title})
    //   .then(result => {
    //     console.log(result)
    //     location.reload();
      
    //   }
    //   )
    //   .catch(err => console.log(err))

    //   setTitle(' ')

    // }
  return (
    <div className='create_form'>
        <input type="text"  value={title}  placeholder='Enter Todo' onChange={(e)=> setTitle(e.target.value)}/>
    
        <button type='button' onClick={handleCreateTodoTitle}> Add Todo</button>
    </div>
  )
}

export default Create
