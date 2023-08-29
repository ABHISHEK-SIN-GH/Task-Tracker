import React from 'react';
import Trow from './Trow';

const Tbody = ({rows,timeTable}) => {
    return (
        <>
            <tbody>
                {rows.map((rowData,index)=>{
                    return <Trow key={index} rowData={rowData} timeTable={timeTable}/>;
                })}
            </tbody>
        </>
    );
}

export default Tbody;
