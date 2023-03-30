import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useFormik,Form,Formik ,Field} from 'formik';
import axios, { AxiosResponse } from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../store/authReducer";


type propType ={
    children: any
}
type values={
    email: string, password: string
  }

export default function Login(props:propType) {
  const [open, setOpen] = React.useState(false);
  const authData =useSelector((state:any) => {
    // console.log(state.auth)
    return state})
  const dispatch = useDispatch();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handleSubmit = async(e:any) => {
    const res = await axios.post("http://localhost:8000/login",{"username":e.email, "password":e.password})
    if (res?.status === 200){
        const token=res.data.token
        dispatch(authAction.login({auth:true,token}))
       
    }
    else{
        console.log("invalid login")
    }

    console.log(res);
  };

  const initialValues = {
    email: '', password: ''
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
              <button className=' mt-5 mb-5 bg-sky-500 text-center text-white rounded-l-full rounded-r-full mr-5 w-24' onClick={handleClickOpen}>{props.children}</button>

      
      <Dialog
        fullScreen={true}
        open={open}
        onClose={handleClose}
      >
        <div className='flex justify-center'>
         <Formik 
                validator={(values:values) => {
                  const errors:{ email: String, password: String } ={ email: '', password: '' }
                  if (!values.password){
                    errors.password = 'Required';
                  }
                  if (!values.email) {
                    errors.email = 'Required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'Invalid email address';
                  }
                  return errors;
                }}
                initialValues={initialValues} onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
         <Form className='grid grid-cols-1 shadow-md border-2 mt-24 border-gray-300 p-10 justify-around h-[400px]'>
            
            <div className=' justify-between flex  flex-row-reverse '><button onClick={handleClose} className=' text-lg text-emerald-900 font-serif font-semibold  flex  '><span className='place-self-top'>x</span></button> 
            <span className=' text-lg text-emerald-900 font-serif font-semibold'>LogIn!</span>
            </div>
            <span  >
           <Field className=" flex h-12 w-[300px]  bg-zinc-100 justify-between place-self-center rounded-2xl border-2 border-gray-400 " name="email" />
           {errors.email && touched.email ? (
             <div>{errors.email}</div>
           ) : null}
           </span>
           <span  >
           <Field className=" flex h-12 w-[300px]  bg-zinc-100 justify-between place-self-center rounded-2xl border-2 border-gray-400 " name="password" />
           {errors.password && touched.password ? (
             <div>{errors.password}</div>
           ) : null}
           </span>
          
           <button className=" hover:bg-emerald-300 h-12 w-[300px]  rounded-2xl bg-emerald-900 text-white text-sm" type="submit">Submit</button>
         </Form>
       )}


            </Formik>
            </div>
      </Dialog>
    </>
  );
}