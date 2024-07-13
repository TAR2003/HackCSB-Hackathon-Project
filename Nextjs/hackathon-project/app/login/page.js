'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';



export default function login() {

    const router = useRouter();
    
    //to store the email and password typed
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });


    //to update any field that being typed  
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


/*
    //sending data to backend for email and password verification
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({formData}),
            });

            const data = await response.json();

            if(data.success) {
                router.push({
                    pathname: '/profile'
                });
            }
            else {
                console.log('Login failed:', data.message);
            }

        } catch (error) {
            console.error('Error:', error);
        }

        
    };
*/

    return (
        <div className={styles.container}>
            <form className={styles.loginForm}>
                <h1>Log in</h1>
                <label className={styles.label} htmlfor="email">Email</label>
                
                <input 
                type="email" 
                placeholder="Enter your Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}   
                className={styles.inputField}></input>

                <label className={styles.label} htmlfor="password">Password</label>
                
                <input 
                type="password" 
                placeholder="Enter your password" 
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={styles.inputField}></input>
                
                <button 
                type="submit" 
                className={styles.submitButton}
                >Login</button>
                <p align='center'>Don't have an account? <br></br> 
                    <a href='/signin' className={styles.link}>Sign up</a></p>
            </form>
            

        </div>
    );
}

