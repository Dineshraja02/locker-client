import React from 'react';
import {Icon} from "@iconify/react";
import "./register.css";
import validateInfo from './validateForm';
import useRegisterForm from './useRegisterForm';

const Register = () => {
    const {handleChange,handleSubmit,errors,values}=useRegisterForm(validateInfo)
    return (
        <div className='register_page'>
                <form className='register' onSubmit={handleSubmit}>
                <Icon icon="akar-icons:lock-on" className='logo' />       
                <h1 className="register_Header">Smart Locker</h1>
                <div className='register_Input'>
                    <input
                    className='register_Inputfields'
                    name='username'
                    value={values.username}
                    onChange={handleChange}
                    type="text"
                    placeholder='Username'>
                    </input>
                    <label htmlFor='username' className='label_Icon'>
                    <Icon icon="ant-design:user-outlined" />  
                    </label>
                </div>
                <div className='register_Input'>
                    <input
                    className='register_Inputfields'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    type="email"
                    placeholder='Email'>
                    </input >
                    <label className='label_Icon'>
                    <Icon icon="carbon:email" />
                    </label>
                </div>
                <div className='register_Input'>
                    <input
                    className='register_Inputfields'
                    name='password'
                    value={values.password}
                    type="password"
                    onChange={handleChange}
                    placeholder='Password'>
                    </input >
                    <label className='label_Icon'>
                    <Icon icon="bytesize:lock" />
                    </label>
                </div>
                <div className='register_Input'>
                    <input
                    className='register_Inputfields'
                    name='password2'
                    value={values.password2}
                    type="password"
                    onChange={handleChange}
                    placeholder='Password'>
                    </input >
                    <label className='label_Icon'>
                    <Icon icon="bytesize:lock" />
                    </label>
                </div>
                <button type="submit"
                className="register_Submit">Sign In</button>
                <p className='register_Switch'>Already have a Account?<a href="/login">Login</a></p>
                </form>
    </div>
    )
}

export default Register
