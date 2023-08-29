import React from 'react';

const BoldHead = ({heading}) => {
    return (
        <div>
            <h2 className="text-base font-semibold text-center md:text-2xl ">{heading}</h2>
        </div>
    );
}

export default BoldHead;
