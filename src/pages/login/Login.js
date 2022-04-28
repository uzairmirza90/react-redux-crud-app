import { Button, TextField } from '@mui/material'
import React from 'react'
import '../login/login.scss'


const Login = () => {

  return (
    <div className='login-page'>

        <div className="home-header">
          <h1 className="home-heading">Login</h1>
        </div>

        <div className="line"></div>

        <div className='login-form'>
            <TextField id='outlined-basic' label='Email' variant='outlined' style={{width: '300px'}}/>
            <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" style={{width: '300px'}}/>
            <Button variant='contained' size='large'>Login</Button>
        </div>
    </div>
  )
}

export default Login