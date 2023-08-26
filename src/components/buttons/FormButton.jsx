import React from 'react';

const FormButton = ({name,action,color,bgColor}) => {
    return (
        <div>
            <button data-te-modal-dismiss onClick={()=>{action()}} className={`ml-1 font-semibold inline-block rounded ${bgColor} ${color} px-6 pb-2 pt-2.5`}>{name}</button>
        </div>
    );
}

export default FormButton;
