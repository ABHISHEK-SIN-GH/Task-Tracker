import React from 'react';

const Button = ({name,size,color,bgColor}) => {
    return (
        <div>
            <button className={`${size} font-semibold rounded-lg ${bgColor} text-center py-2 md:py-3 px-4 md:px-6 ${color}`}>{name}</button>
        </div>
    );
}

export default Button;
