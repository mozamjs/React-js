import { useState } from "react";

const App =() => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [todo, setTodo] = useState([]);

  //Add Todo

  const addTodo = (event)=>{
    event.prventDefault();
    console.log(title);
    console.log(description);

    const obj = {
      title , description , id:Date.now()
    }
    todo.push(obj);
    console.log(obj);

    setTodo([...todo])
    
  }


  return(
    <>
      <h1>Todo App</h1>

      <form onSubmit={addTodo}>
      <input type="text" placeholder="enter title" value ={title} onChange={(e)=> setTitle(e.target.value)}/>

      </form>


    </>
  )

}

export default App