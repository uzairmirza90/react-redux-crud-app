import React from 'react'
import { TextField, Button } from '@mui/material';
import '../signup/signup.scss'
import { auth, db } from '../../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';

const SignUp = () => {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerWithEmailAndPassword = async (name, email, password) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name,
                authProvider: "local",
                email,
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='login-page'>

            <div className="home-header">
                <h1 className="home-heading">Sign Up</h1>
            </div>

            <div className="line"></div>

            <div className='login-form'>

                <TextField 
                    id='outlined-basic' 
                    label='Username' 
                    variant='outlined' 
                    style={{ width: '300px' }} 
                    value={username} 
                    onChange={(e) => setUserName(e.target.value)} 
                />

                <TextField 
                    id='outlined-basic' 
                    label='Email' 
                    variant='outlined' 
                    style={{ width: '300px' }} 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />

                <TextField 
                    id="outlined-password-input" 
                    label="Password" 
                    type="password" 
                    autoComplete="current-password" 
                    style={{ width: '300px' }} 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />

                <Button 
                    variant='contained' 
                    size='large' 
                    onClick={() => registerWithEmailAndPassword(username, email, password)}>
                        Sign Up
                </Button>
            </div>
        </div>
    )
}

export default SignUp