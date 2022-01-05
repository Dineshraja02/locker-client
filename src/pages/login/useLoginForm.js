import {useState} from 'react';

const useLoginForm = (validate) => {
   
    const [values,setValues] = useState({
        username:"",
        password:""
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
    setErrors(validate(values));
    console.log(values);
}

return {handleChange,values,handleSubmit,errors};
}

export default useLoginForm;
