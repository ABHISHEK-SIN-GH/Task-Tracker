import React from 'react';

const Thead = ({headings}) => {
    return (
        <>
            <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                    {headings.map((heading,index)=>{
                        return <th scope="col" key={index} className="border-r px-6 py-4 dark:border-neutral-500">{heading}</th>;
                    })}
                    <th scope="col" className="w-[250px] border-r px-6 py-4 dark:border-neutral-500">Action</th>
                </tr>
            </thead>
        </>
    );
}

export default Thead;
