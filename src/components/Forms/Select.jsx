import React from 'react';

const Select = ({id,label,values}) => {
    return (
        <div id={id} className="relative mb-3">
            <select data-te-select-init defaultValue={""}>
                <option value="" hidden></option>
                {values.map((value,index)=>{
                    return <option key={index} value={value}>{value}</option>;
                })}
            </select>
            <label htmlFor={id} data-te-select-label-ref className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">{label}</label>
        </div>
    );
}

export default Select;
