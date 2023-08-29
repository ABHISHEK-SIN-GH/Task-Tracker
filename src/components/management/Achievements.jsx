import React from 'react';
import Head1 from "../headings/Head1";
import ModalOutlineButton from '../buttons/ModalOutlineButton';
import Table from '../tables/Table';
const Achievements = () => {
    const headings = ["SNo.","Achievement Details","Date"];
    const rows = [
      [1,"First position achieved in hackathon held in IIT-KGP","22-10-2023"],
      [1,"First position achieved in hackathon held in IIT-KGP","22-10-2023"],
      [1,"First position achieved in hackathon held in IIT-KGP","22-10-2023"],
      [1,"First position achieved in hackathon held in IIT-KGP","22-10-2023"],
      [1,"First position achieved in hackathon held in IIT-KGP","22-10-2023"],
      [1,"First position achieved in hackathon held in IIT-KGP","22-10-2023"],
      [1,"First position achieved in hackathon held in IIT-KGP","22-10-2023"],
    ]
    return (
        <>
            <div className="md:mx-7 p-4">
              <div className="flex flex-row items-center justify-between">
                    <Head1 heading={"List Your Achievements"}/>
                    <ModalOutlineButton name={"Add Achievement"} size={"text-base"} color={"primary"} targetID={"AddAchievementForm"}/>
                </div>
                <Table headings={headings} rows={rows}/>
            </div>
        </>
    );
}

export default Achievements;
