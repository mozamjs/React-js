// // component 

// import { useState } from "react"
// import './App.css'


// function App()
// {
//   const [counter, setCounter] = useState(0)

//   const addCounter = ()=>{
//     setCounter(counter + 1)
//   }
//   const lessCounter = ()=>{
//     if(counter > 0){
//       setCounter(counter - 1)
//     }
//   }

//   return(
//     <>
//     <div className="container">
//       <button onClick={lessCounter}>LESS</button>
//       <h2>{counter}</h2>
//       <button onClick={addCounter}>ADD</button>
//     </div>
//     </>
//   )
// }
// export default App







//components(props)


// import Btn  from "./components/Btn"
// import Card from "./components/Card"
// import "./App.css"


// const App = ()=>{

// return(
//   <>
//     <h1>many buttons</h1>
//     <Btn title= "submit"/>  
//     <Btn title= "refresh"/>  
//     <Btn title= "click me"/>  


//    <div className="parent">
//      <h2>Multiple cards</h2>
//      <div className="cards">
           
//         <div className="card"> 
//             <Card title="my card 1"
//           discription="i am card one"
//           btn = "click me"/></div>

//     <div className="card"> 
//             <Card title="my card 2" 
//           discription="i am card two"
//           btn = "click me"/></div>
    
//     <div className="card"><Card title="my card 3"
//           discription="i am card three"
//           btn = "click me"/></div>
//     <div className="card"><Card title="my card 4"
//           discription="i am card four"
//           btn = "click me"/></div>
//      </div >
 
//    </div>
          
//   </>
  
// )
// }
// export default App




//conditional rendering

// import React, { useState } from "react";

// const  App = ()=>{
//   const[toggle, setToggle]= useState(false);

//   return(
//     <>
//       <h1>Hello World</h1>
//       <button onClick = {()=> setToggle(!toggle)}>{toggle ? 'onnnnn':'offff'}</button>
//       {!toggle && <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, porro.</p>}
//       {!toggle ? <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dicta</p>:null}
//     </>
//   )

// }
// export default App


// import React, { useState } from "react";
// import Card from './components/Card'

// const App = ()=>{
//   const [toggle, setToggle]= useState(true)

//   return(
//     <>
//       <h1>Hello World</h1>
//       <button onClick={()=> setToggle(!toggle)}>Toggle btn</button>

//       {toggle && <Card title = "I phone 15 pro" description="its a apple componey mobile phone" btn = "reset"/>}
//     </>
//   )
// }
// export default App






//use effect
//api call


import React, { useEffect, useState } from "react";

const App = () =>{
  const[loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState(null);

  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res =>{
        console.log(res);
        setUsers(res)
      })
      .catch(err=>{
        setError(true)
      })
      .finally(()=>{
        setLoading(false)
      })
  },[])

  return(
    <>
      <h1>Hello world</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>internal server error..</h1>}
      {users? users.map(item =>{
        return <h1 key={item.id}>{item.name}<br/>{item.email}</h1>
      }) :null}
    </>
  )
}
export default App

















