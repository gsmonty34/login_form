import React from 'react'
import {useFormik  } from 'formik'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './App.css'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

const validation = yup.object({
    name: yup.string().max(20, 'Must be 20 character or less').required("Name is required"),
    email: yup.string().email("Email is required"),
    password: yup.string().required("Password is required")

})

const Login_form = () => {


    const formik = useFormik({
        initialValues :{
            name : "",
            email : "",
            password : "",
        },
        onSubmit:(values) =>{
            console.log(values);
            navigate('/welcome')
        },
        validationSchema : validation
    })
    
    let navigate = useNavigate()
    return (
        <div className='main'>
            <div className="form_con">
                <form onSubmit={formik.handleSubmit}>
                    <TextField id='name' name='name' label='name' type='text'  
                    onChange={formik.handleChange}
                     value={formik.values.name} 
                     error ={formik.touched.name && Boolean(formik.errors.name)} 
                     helperText={formik.touched.name && formik.errors.name}/><br />
                    <TextField id='email' name='email' label='email' type='email' 
                     onChange={formik.handleChange} 
                     value={formik.values.email} 
                     error ={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}/><br />
                    <TextField id='password' name='password' label='password' type='password' 
                     onChange={formik.handleChange}
                     value={formik.values.password}
                     error ={formik.touched.password && Boolean(formik.errors.password)}
                     helperText={formik.touched.password && formik.errors.password}/><br /><br />
                     
                    <Button variant='contained' type='submit' >Log-In </Button><br />
                </form>
            </div>
        </div>
    )
}

export default Login_form
