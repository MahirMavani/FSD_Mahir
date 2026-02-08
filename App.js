// import react from 'react';
// import "./styles.css";

// function Head(){
//   return<fieldset>
  
  
//   <h1>Employee Details</h1>
  
//   <div class="detail">
//   <label>Employee ID: </label>
//   <input class="i1"></input><br></br><br></br>
//   <label>Employee Name: </label>
//   <input class="i2"></input><br></br><br></br>
//   <label>Employee Company: </label>
//   <input class="i3"></input><br></br><br></br>
//   <label>Employee Salary: </label>
//   <input class="i4"></input><br></br><br></br>
//   <label>Employee Location: </label>
//   <input class="i5"></input><br></br><br></br>
//   <label>Employee Phone Number: </label>
//   <input class="i6"></input><br></br><br></br>
//   </div>
//   </fieldset>
  
// };
// export default Head;

// import react from 'react';
// import "./youtube.css";
// function YouTubeLogin() {
//   return (
//     <body>
//     <fieldset>
//     <div>
//       <h1>YouTube</h1>
//       <input class="i1" type="email" placeholder="Email"></input><br></br><br></br>
//       <input class="i2" type="password" placeholder="Password"></input><br></br>
//       <a class="a1" href='Forgot Password'>Forgot Password?</a><br></br><br></br>
//       <button>Login</button>  
//       <p class="p1">Dont have an account? <a class="a2" href=''>Sign up</a></p>   
//     </div>
//     </fieldset>
//     </body>
//   );
// }
// export default YouTubeLogin;


// function Parent(props) {
//   return <h1>Hello,{props.name}</h1>
// }
// export default child;
// function child(){
//   return(
//     <Parent name="Mahir"/>
//   )
// }

import React,{useState} from 'react';
import "./message.css";
function State(){
  const[message,setMessage]=useState("Hello");
  return <div>
    <h1 class="h1">{message}</h1>
    <button
      onClick={()=>setMessage("Mahir")}>Change Text</button>
  </div>
};
export default State

// import React, {useState} from 'react';
// import "./buffer.css";
// function Counter(){
//   const[count,setCount]=useState(0);
//   return <body>
//   <fieldset>
//   <div>
//     <p class="p1">{count}</p><br></br>
//     <button
//       class="b1" onClick={()=>setCount(count-1)}>decrement</button>
//     <button
//       class="b2" onClick={()=>setCount(0)}>Reset</button>
//     <button
//       class="b3" onClick={()=>setCount(count+1)}>increment</button>
//   </div>
//   </fieldset>
//   </body>
// };
// export default Counter
