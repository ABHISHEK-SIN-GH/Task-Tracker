import React from 'react';
import Head1 from "../headings/Head1";
const TrackTasks = () => {
    return (
        <>
            <div className="md:mx-7 p-4">
                <Head1 heading={"Analyze Your Growth"}/>
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-4">
                    <div className="p-3 rounded-2xl"> 
                        <div className="mx-auto w-3/5 overflow-hidden">
                            <canvas
                                data-te-chart="bar"
                                data-te-dataset-label="Traffic"
                                data-te-labels="['Monday', 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday ']"
                                data-te-dataset-data="[2112, 2343, 2545, 3423, 2365, 1985, 987]">
                            </canvas>
                        </div>
                    </div>
                    <div className="bg-primary p-3 rounded-2xl">02</div>
                </div>
            </div>
        </>
    );
}

export default TrackTasks;
