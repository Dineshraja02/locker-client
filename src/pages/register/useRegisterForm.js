import axios from 'axios';
import {useEffect, useState} from 'react';


const useRegisterForm = (validateInfo,props) => {
    console.log(props)
    const API_URL = "http://localhost:3001/user/register"
    const [values,setValues] = useState({
        username:"",
        email:"",
        password:"",
        password2:""
    });
    const [errors,setErrors]=useState({});
    const [submit,setSubmit]=useState(false);

const handleChange= e =>{
        const {name,value}=e.target;
        setValues({
            ...values,
            [name]:value
        });
    };
const handleSubmit=async(e)=>{
    e.preventDefault();
    setErrors(await validateInfo(values));
    setSubmit(true);
}

const registration =async()=>{
    await axios.post(API_URL,{
            username:values.username,
            email:values.email,
            password:values.password
        })
    .then(res=>{
        window.history.pushState("/login")
    })
    .catch(err=>{
        console.log("Registration Failed");
    })
}

useEffect(()=>{
    if(Object.keys(errors).length===0 && submit){
       registration();
    }
},[])// eslint-disable-line react-hooks/exhaustive-deps

return {handleChange,values,handleSubmit,errors};
}

export default useRegisterForm;
