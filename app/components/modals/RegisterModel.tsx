'use client'

import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useCallback,useState } from 'react'

import { FieldValues,SubmitHandler,useForm } from 'react-hook-form'

import useRegisterModel from '@/app/hooks/useRegisterModel'
import Modals from './Modals'
import Heading from '../Heading'
const RegisterModel=()=>{

    const registerModal=useRegisterModel();
    const [isLoading,setIsLoading]=useState(false)

    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting}
    }=useForm<FieldValues>({
        defaultValues:{
           name:'',
           email:'',
           password:''
        }
    });

    const onSubmit:SubmitHandler<FieldValues>=(data)=>{
        setIsLoading(true)

        axios.post('/api/register',data)
        .then(()=>{
            registerModal.onClose()
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    const bodyContent=(
        <div className='flex flex-col gap-4'>
          <Heading 
          title="Welcome to Travelloft"
          subtitle="Create an account"
          />
        </div>
    )
    return (
        <Modals  
         disabled={isLoading}
         isOpen={registerModal.isOpen}
         title='Register'
         actionLabel="Continue"
         onClose={registerModal.onClose}
         onSubmit={handleSubmit(onSubmit)}
        />
    )
}

export default RegisterModel