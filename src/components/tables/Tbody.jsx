import React from 'react';
import Trow from './Trow';

const Tbody = ({rows}) => {
    return (
        <>
            <tbody>
                {rows.map((rowData,index)=>{
                    return <Trow key={index} rowData={rowData}/>;
                })}
            </tbody>
        </>
    );
}

export default Tbody;
