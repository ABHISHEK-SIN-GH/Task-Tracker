import React from 'react';
import Trow from './Trow';

const Tbody = ({rows}) => {
    return (
        <>
            <tbody>
                {rows.map((rowData)=>{
                    return <Trow rowData={rowData}/>;
                })}
            </tbody>
        </>
    );
}

export default Tbody;
