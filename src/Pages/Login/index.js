import React,{useState} from 'react'
import {Link, useNavigate } from 'react-router-dom'
import { handleLogin } from './util'
import { connect } from "react-redux";
import  {changeRole} from '../../Redux/action';

function Login(props){
    const navigate = useNavigate();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    
    return(
        <div>
            <h1>Login</h1>
            <div id='form'>
               <label for='usernameInput'>User Name</label>
               <input type='text' 
                      onChange={(event) => {setUsername(event.target.value)}}
                      name='usernameInput'></input>
               <label for='passwordInput'>Password</label>
               <input type='text' 
                      onChange={(event) => {setPassword(event.target.value)}}
                      name='passwordInput'></input>
            </div>
            <button onClick={()=>{
                if(handleLogin(username, password)){
                    username === 'Admin' ? 
                    props.dispatch(changeRole(1)):
                    props.dispatch(changeRole(0))
                    navigate("/books")
                } else {
                    navigate("/")
                    alert('User name or password is incorrect')
                }
                }}>Enter</button>
            <br/>
            <br/>
            <Link to='/register' >Register</Link>
            <br/>
        </div>
    )
}

const mapStateToProps = (state, props) => ({
    role: state.role
  });
  
export default connect(mapStateToProps)(Login);
