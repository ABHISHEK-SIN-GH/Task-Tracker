import React from 'react';
import FormButton from '../buttons/FormButton'
import Head2 from '../headings/Head2';
const GeneralForm = ({title,form,formButton,action}) => {
    return (
        <>
            <div className="rounded-lg bg-white px-6 py-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.3)] dark:bg-neutral-700">
                <Head2 heading={title}/>
                <hr className='my-4 h-[2px] bg-primary'/>
                {form}
                {/* <hr className='my-2'/> */}
                <div className='text-right'>
                    <FormButton name={"Add Target"} color={"text-light"} bgColor={"bg-primary"} action={()=>{console.log("Action Called")}}/>
                </div>
            </div>
        </>
    );
}

export default GeneralForm;
