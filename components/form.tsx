'use client';

import Image from "next/image"
import errorIcon from '../public/assets/images/error-icon.svg';
import { saveForm } from "@/app/actions";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import LoadingSpinnerIcon from "./icons/loadingSpinnerIcon";

const initialState = {
  msg: '',
  errors: {},
  status: ''
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="w-fit ml-auto border-b-2 border-green mt-7 pb-2 md:tracking-widest xl:mt-8 hover:text-green" disabled={pending}>
      SEND MESSAGE
    </button>
  )
}

function Loader() {
  const { pending } = useFormStatus();

  return (
    <button className={`fixed top-0 -right-40 inline-flex items-center mt-4 mr-2.5 px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-grey-200 bg-white hover:white ${pending && '-translate-x-40'} transition ease-in-out duration-150 cursor-not-allowed`}>
      <LoadingSpinnerIcon />
      Processing...
    </button>
  )
}

export default function Form() {
  const [state, formAction] = useFormState(saveForm, initialState);

  useEffect(() => {
    if (state.status === 'error') {
      toast.error(state.msg);
    } else if (state.status === 'success') {
      toast(state.msg)
    }
  }, [state.status, state.msg])

  return (
    <form action={formAction} className="flex flex-col mt-12 xl:flex-1 xl:mt-0" id='contact-form'>
      <Loader />
      <div className="flex flex-col items-end mb-7 space-y-1 relative">
        <input className={`w-full  bg-transparent border-b border-grey-100 pl-4 pb-3 xl:pb-4 focus:outline-none focus:border-green uppercase ${state.errors?.name && state.errors?.name.length > 0 && 'border-red'}`} type="text" placeholder="NAME" name='name' required autoComplete="off" />
        {state.errors?.name && state.errors?.name.length > 0 &&
          <>
            <Image className='absolute -top-1' src={errorIcon} alt='error icon' />
            <small className="text-red">{state.errors.name[0]}</small>
          </>
        }
      </div>

      <div className="flex flex-col items-end mb-7 space-y-1 relative">
        <input className={`w-full bg-transparent border-b border-grey-100 pl-4 pb-4 focus:outline-none focus:border-green uppercase ${state.errors?.email && state.errors.email.length > 0 && 'border-red'}`} type="email" name="email" id="" placeholder="EMAIL" required autoComplete="off" />
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
      <SubmitButton />
    </form>
  )
}

