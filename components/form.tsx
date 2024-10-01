'use client';

import Image from "next/image"
import errorIcon from '../public/assets/images/error-icon.svg';
import { saveForm } from "@/app/actions";
import { useFormState } from "react-dom";

const initialState = {
  msg: '',
  errors: {},
}

export default function Form() {
  const [state, formAction] = useFormState(saveForm, initialState);

  console.log(state.msg)

  return (
    <form action={formAction} className="flex flex-col mt-12 xl:flex-1 xl:mt-0">
      <div className="flex flex-col items-end mb-7 space-y-1 relative">
        <input className={`w-full  bg-transparent border-b border-grey-100 pl-4 pb-3 xl:pb-4 focus:outline-none focus:border-green uppercase ${state.errors?.name && state.errors?.name.length > 0 && 'border-red'}`} type="text" placeholder="NAME" name='name' required/>
        {state.errors?.name && state.errors?.name.length > 0 &&
          <>
            <Image className='absolute -top-1' src={errorIcon} alt='error icon' />
            <small className="text-red">{state.errors.name[0]}</small>
          </>
        }
      </div>

      <div className="flex flex-col items-end mb-7 space-y-1 relative">
        <input className={`w-full bg-transparent border-b border-grey-100 pl-4 pb-4 focus:outline-none focus:border-green uppercase ${state.errors?.email && state.errors.email.length > 0 && 'border-red'}`} type="email" name="email" id="" placeholder="EMAIL" required/>
        {state.errors?.email && state.errors?.email.length > 0 &&
          <>
            <Image className='absolute -top-1' src={errorIcon} alt='error icon' />
            <small className="text-red">{state.errors?.email[0]}</small>
          </>
        }
      </div>

      <div className="flex flex-col items-end mb-7 space-y-1 relative">
        <textarea className={`w-full bg-transparent border-b border-grey-100 pl-4 h-24 xl:h-32 focus:outline-none focus:border-green ${state.errors?.message && state.errors?.message.length > 0 && 'border-red'}`} name="message" id="" placeholder="MESSAGE" required />
        {state.errors?.message && state.errors?.message.length > 0 &&
          <>
            <Image className='absolute -top-1' src={errorIcon} alt='error icon' />
            <small className="text-red">{state.errors?.message}</small>
          </>
        }
      </div>

      <button type="submit" className="w-fit ml-auto border-b-2 border-green mt-7 pb-2 md:tracking-widest xl:mt-8 hover:text-green">
        SEND MESSAGE
      </button>
    </form>
  )
}

