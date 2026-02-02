import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import "./Login.css"

const Login = () => {
  const { user,setIsValidUser,isValidUser} = useContext(UserContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

function handleSubmit(e){
  e.preventDefault();
  if(user.name===name && user.password===password){
    setIsValidUser(true);
  }else{
    alert("Please login with appropriate credentials");
  }
}

  return (
    <div className={`container-fluid p-3 pb-5 main ${isValidUser ? "hide" : "show"}`}>
      <div className='row w-25 m-auto my-5  py-5 bg-white rounded rounded-3 p-2 shadow'>
        <h4 className='text-center w-50 m-auto p-2 rounded rounded-2 bg-primary text-white mb-3'>Login here</h4>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="" className='form-label'>Name</label> <br></br>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} /> <br></br>
          <label htmlFor="" className='form-label'>Password</label><br></br>
          <input type="text" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
          <button className='btn btn-primary w-100 my-2'> Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
