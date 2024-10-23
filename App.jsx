

// ye useRef hai ek aisa tarika jisse hum form handle kr skte hai 

//import React, { useRef } from 'react'

// function App() {
//   const name = useRef(null)
//   const email  = useRef(null)

//   const submitHandler = (event)=>{
//     event.preventDefault()
//     console.log(name.current.value ,email.current.value)
//   }
//   return (
//     <div>
//    <form onSubmit={submitHandler}>
//     <input ref={name} type="name" placeholder='name' />
//     <input ref={email} type="email" placeholder='email' />
//     <input type="submit" />
//     </form>
//     </div>
//   )
// }

// export default App



// handling component to handling form by using useState . useState is used to update real time data during input fill amd submit form 
// import React, { useState } from 'react'

// function App() {
//   const [val,setVal] = useState({name:"",email:""})
  
//   const submitHandler = (e)=>{
//     e.preventDefault()
//     console.log(val)
    
//   }
//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <input  onChange={(e)=> setVal({...val,name:e.target.value})} type="name" placeholder='name' />
//         <input  onChange={(e)=> setVal({...val,email:e.target.value})}  type="email" placeholder='email' />
//         <input type="submit" />
//       </form>
//     </div>
//   )
// }

// export default App




import {useForm} from 'react-hook-form'

function App() {
 const {register,handleSubmit} = useForm()
  
  return (
    <div>

<form  onSubmit={handleSubmit(data => console.log(data))  }>
  <input {...register('name')} type="name" placeholder='name' />
  <input {...register('email')} type="email" placeholder='email' />
  <input type="submit" />
</form>
    </div>
  )
}

export default App

