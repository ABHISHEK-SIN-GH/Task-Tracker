import React from 'react';
import Head1 from "../headings/Head1";
import Card from '../cards/Card';

const KeepNotes = () => {
    return (
        <>
            <div className="md:mx-7 p-4">
                <Head1 heading={"Keep Important Notes"}/>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </>
    );
}

export default KeepNotes;
