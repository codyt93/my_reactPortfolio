import React,{useState} from 'react';

export default function Contact() {
  const [error, setError] = useState('');
  const handleError = (event)=>{
if (event.target.value === "") {
  setError("this feild is required")
}
  }
  return (
    <div>
      <h1>Contact Page</h1>
      <p>{error}</p>

     <form action=""> 
     <label htmlFor="name">name</label>
     <input onFocus={()=>setError("")} onBlur={(event)=>handleError(event)} type="text" />
     <label htmlFor="email">email</label>
     <input onFocus={()=>setError("")} onBlur={(event)=>handleError(event)} type="text" />
     <label htmlFor="message">message</label>
     <input onFocus={()=>setError("")} onBlur={(event)=>handleError(event)} type="text" />
     </form>
    </div>
  );
}
