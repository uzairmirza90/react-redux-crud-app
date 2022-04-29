import { Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import '../login/login.scss'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebase'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const logInWithEmailAndPassword = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.log(err)
        }
    }

  return (
    <div className='login-page'>

        <div className="home-header">
          <h1 className="home-heading">Login</h1>
        </div>

        <div className="line"></div>

        <div className='login-form'>

            <TextField 
                id='outlined-basic' 
                label='Email' 
                variant='outlined' 
                style={{width: '300px'}} 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />

            <TextField 
                id="outlined-password-input" 
                label="Password" 
                type="password" 
                autoComplete="current-password" 
                style={{width: '300px'}} 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button 
                variant='contained' 
                size='large' 
                onClick={() => logInWithEmailAndPassword(email, password)}>
                    Login
            </Button>
            
        </div>
    </div>
  )
}

export default Login