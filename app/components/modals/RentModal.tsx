'use client'

import React, { useMemo, useState } from 'react'
import Modals from './Modals'
import useRentModal from '@/app/hooks/useRentModel'
import Heading from '../Heading'

enum STEPS {
    CATEGORY = 0,
    LOCATION =1,
    INFO=2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE=5
}

const RentModal = () => {

    const rentModal=useRentModal()

    const [step,setStep] = useState(STEPS.CATEGORY)

    const onBack=()=>{
        setStep((prev)=>prev-1)
    }

    const onNext=()=>{
        setStep((prev)=>prev+1)
    }

    const actionLabel=useMemo(()=>{
        if(step === STEPS.PRICE){
       return 'Create'
        }
        return 'Next'
     
    },[step])

    const secondaryActionLabel=useMemo(()=>{
        if(step === STEPS.CATEGORY){
            return undefined
        }

        return 'Back'
},[step])

let bodyContent=(
    <div>
        <Heading 
        title='Which of these best describes your place?'
        subtitle='Pick a category'
        />

        <div
        className='grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh]'
        
        >

        </div>

    </div>
)
  return (
<Modals 
  isOpen={rentModal.isOpen}
  onClose={rentModal.onClose}
  title='Travelloft your home'
 actionLabel={actionLabel}
 secondaryActionLabel={secondaryActionLabel}
 secondaryAction={step === STEPS.CATEGORY?undefined : onBack}
onSubmit={rentModal.onClose}

/>
  )
}

export default RentModal