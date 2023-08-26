import React from 'react';
import FormButton from '../buttons/FormButton';

const FormModal = ({name,targetID,form,action,button}) => {
    return (
        <div data-te-modal-init className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none" id={targetID} tabIndex="-1">
            <div data-te-modal-dialog-ref className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
                <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-light">
                    <div className="flex flex-shrink-0 items-center justify-center rounded-t-md p-4 ">
                        <h5 className='text-primary font-bold text-2xl'>{name}</h5>
                    </div>
                    <hr className='h-[2px] bg-primary mx-4'/>
                    <div className="relative p-4">
                        {form}
                    </div>
                    <div className="flex flex-shrink-0 flex-wrap items-center justify-end px-4 pb-4 -mt-2">
                        <FormButton name={"Close"} action={()=>{console.log('closed!!')}} color={"text-light"} bgColor={"bg-red-500"}/>
                        <FormButton name={button} action={action} color={"text-light"} bgColor={"bg-primary"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormModal;

