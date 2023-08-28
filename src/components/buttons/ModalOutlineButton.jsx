import React from 'react';

const ModalOutlineButton = ({name,size,color,targetID}) => {
    return (
        <div>
            <button className={`${size} font-semibold rounded-lg border-solid border-2 border-${color} text-center py-2 md:py-3 px-4 md:px-6 text-${color}`} data-te-toggle="modal" data-te-target={`#${targetID}`}>{name}</button>
        </div>
    );
}

export default ModalOutlineButton;
