import React from 'react';

const PrimaryButton = ({name,size}) => {
    return (
        <div>
            <button className={`${size} font-bold rounded-lg bg-primary text-center py-1 px-4 md:px-6 text-secondary`}>{name}</button>
        </div>
    );
}

export default PrimaryButton;
