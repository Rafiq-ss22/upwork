import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useFormik,Form,Formik ,Field} from 'formik';
import axios from 'axios';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:600,
  p: 4,

};
type values={
    email: string, password: string
  }


type propType ={
    children: any
}

export default function Register(props:propType) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = async(e:any) => {
    console.log("kjajkcjk")

    const res = await axios.post("http://localhost:8000/register",{"username":e.email, "password":e.password})
 
    console.log(res);
  };

  const initialValues = {
    email: '', password: ''
  };

  return (
    <>
      <button className='text-center bg-green-500 text-white mt-5 mb-5 rounded-l-full rounded-r-full mr-5 w-24' onClick={handleOpen}>{props.children}</button>
     
      <div className=' align-middle'>


    
      <Modal
        open={open}
        onClose={handleClose}
        sx={style}
        className=" bg-white overflow-hidden  "
    
      >
        <div>
            <div className=' justify-between flex place-self-end flex-row-reverse '><button onClick={handleClose} className=' bg-white p-2 place-self-end'>x</button> 
            <span className=' text-lg text-emerald-900 font-serif font-semibold'>Register Now!</span>
            </div>
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
         <Form className='grid grid-cols-1 justify-between h-[480px] w-[300px]'>
            <span  >
           <Field className=" mt-16 outline-none p-3 bg-grey-100 h-12 w-[300px]  rounded-2xl" name="email" />
           {errors.email && touched.email ? (
             <div>{errors.email}</div>
           ) : null}
           </span>
           <span  >
           <Field className=" mt-16 outline-none p-3 bg-grey-100 h-12 w-[300px]  rounded-2xl" name="password" />
           {errors.password && touched.password ? (
             <div>{errors.password}</div>
           ) : null}
           </span>
          
           <button className=" hover:bg-emerald-300 h-12 w-[300px]  rounded-2xl bg-emerald-900 text-white text-sm" type="submit">Submit</button>
         </Form>
       )}


            </Formik>
        


        </div>
     
      </Modal>
      </div>
    </>
  );
}