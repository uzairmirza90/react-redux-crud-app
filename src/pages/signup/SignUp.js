import React from 'react'
import { TextField, Button } from '@mui/material';
import '../signup/signup.scss'

const SignUp = () => {
    return (
        <div className='login-page'>

        <div className="home-header">
          <h1 className="home-heading">Sign Up</h1>
        </div>

        <div className="line"></div>

        <div className='login-form'>
            <TextField id='outlined-basic' label='Username' variant='outlined' style={{width: '300px'}}/>
            <TextField id='outlined-basic' label='Email' variant='outlined' style={{width: '300px'}}/>
            <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" style={{width: '300px'}}/>
            <Button variant='contained' size='large'>Sign Up</Button>
        </div>
    </div>
    )
}

export default SignUp