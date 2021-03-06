import React, {useState} from 'react';
import axios from "axios"
import './LoginInput.css'
import { useHistory } from 'react-router-dom'

const LoginInput = ({setLogInUser}) =>{

    const history = useHistory()


    const [user, setUser] = useState({
        email:"",
        password:"",

    })

    const handleChange = e => {

        const { name, value } = e.target;

        setUser({

            ...user,

            [name]: value

        })

    }

    const login = () => {
        axios.post("http://localhost:9005/login", user)
        .then(res => {alert(res.data.message)
                      setLogInUser(res.data.user)
                      history.push("/")
        })
    }

    return <div className='login-input'>
        <h1>Login</h1>
        <h3>Sign in with your account</h3>
        <form>
            <input type="email" name="email" placeholder="Enter email" onChange={handleChange}/><br/>
            <input type="password" name="password" placeholder='Enter Password' onChange={handleChange}/><br/>
            <input type="button" onClick={login} value="LOG IN"/><br/>
        </form>
        <p>Need an account? Please <a href='/register'>Register</a></p>
    </div>;
}

export default LoginInput;