import React from 'react';

const Button = ({name,icon,size,color,bgColor}) => {
    return (
        <div>
            <button className={`${size} font-semibold rounded-lg ${bgColor} text-center py-3 md:py-3 px-4 md:px-4 ${color}`} title={name}>{icon}</button>
        </div>
    );
}

export default Button;
