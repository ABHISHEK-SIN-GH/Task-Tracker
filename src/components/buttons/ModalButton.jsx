import React from 'react';

const ModalButton = ({name,size,color,targetID}) => {
    return (
        <div>
            <button className={`${size} font-semibold rounded-lg ${color} text-center py-2 md:py-3 px-4 md:px-6 text-light`} data-te-toggle="modal" data-te-target={`#${targetID}`}>{name}</button>
        </div>
    );
}

export default ModalButton;
