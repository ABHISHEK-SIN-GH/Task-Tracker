import React from 'react';
import Button from '../buttons/Button';

const Trow = ({rowData}) => {
    return (
        <>
            <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">{rowData.sno}</td>
                <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">{rowData.task}</td>
                <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">{rowData.category}</td>
                <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">{rowData.priority}</td>
                <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">{rowData.status}</td>
                <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">{rowData.due}</td>
                <td className="flex flex-grow gap-2 justify-center whitespace-nowrap border-r px-6 md:px-0 py-4 font-medium dark:border-neutral-500">
                    <div className='basis-1/4'><Button name={"Update Task"} size={"text-xs"} bgColor={"bg-primary"} color={"text-light"}/></div>
                    <div className='basis-1/4'><Button name={"Delete Task"} size={"text-xs"} bgColor={"bg-secondary"} color={"text-primary"}/></div>
                </td>
            </tr>
        </>
    );
}

export default Trow;
