import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { menuAction } from '@/store/menuReducer';

type PropType={name: string}


export default function BasicSelect(props:PropType) {
  const [age, setAge] = React.useState('');
  const dispatch = useDispatch();


  const handleChange = (event:any) => {
    setAge(event.target.value as string);
  };

  return (
  <div className='flex h-20 gap-1 '>
    <span className='place-self-center text-sm font-medium '>
    {props.name}
    </span>


    <div onMouseOver={()=>dispatch(menuAction.toggle(props.name))}  className='flex h-6 place-self-center hover:rotate-180'>
    <svg xmlns="http://www.w3.org/2000/svg" width={'auto'}  height={'auto'} fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img">
    <path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M18 10l-6 5-6-5"></path>
    </svg>
    </div>
    </div>
  );
}