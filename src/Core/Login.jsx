import React from "react";
import "../styles/login.css";
const Login = () => {
  return (
  <main className="login">
    
    {/* <div className="content">   
    <h3>User - Login</h3>  
      <form className="credentials">
        
          <label htmlFor="email">Email Id</label>
          <input type="text " id="email" placeholder="email id"/>
        
        
          <label htmlFor="pwd">Password</label>
          <input type="password" id="pwd" placeholder="********"/>
        
      </form>
    </div> */}
    <div className="flex flex-col w-80%" >
      <h3>User Login</h3>
      <form action="">
        <div className="flex ">
        <label for="">Enter your email id here</label>
        <input type="mail" required className="text-main rounded-2xl" />
        </div>
        <div className="flex">        <label for="">password</label>
        <input type="mail" required className="text-main rounded-2xl" />
        </div>

      </form>
    </div>
  </main>);
}

export default Login;
