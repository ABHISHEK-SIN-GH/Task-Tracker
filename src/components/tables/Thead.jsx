import React from 'react';

const Thead = ({headings}) => {
    return (
        <>
            <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                    {headings.map((heading,index)=>{
                        return <th scope="col" key={index} className="border-r px-6 py-4 dark:border-neutral-500">{heading}</th>;
                    })}
                </tr>
            </thead>
        </>
    );
}

export default Thead;
