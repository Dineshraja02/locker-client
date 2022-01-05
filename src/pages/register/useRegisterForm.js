import {useState} from 'react';

const useRegisterForm = (validateInfo) => {
   
    const [values,setValues] = useState({
        username:"",
        email:"",
        password:"",
        password2:""
    });
    const [errors,setErrors]=useState({});

const handleChange= e =>{
        const {name,value}=e.target;
        setValues({
            ...values,
            [name]:value
        });
    };
const handleSubmit=async(e)=>{
    e.preventDefault();
    setErrors(validateInfo(values));
    console.log(values);
}

return {handleChange,values,handleSubmit,errors};
}

export default useRegisterForm;
