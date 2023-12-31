import React from 'react';
import Thead from './Thead';
import Tbody from './Tbody';

const Table = ({headings,rows,timeTable}) => {
    return (
      <div className="flex flex-col">
        <div className="overflow-x-auto overflow-y-auto h-[350px] sm:-mx-6 lg:-mx-8" id='table'>
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full border text-center text-sm font-light dark:border-neutral-500 bg-light">
                <Thead headings={headings} timeTable={timeTable}/>
                <Tbody rows={rows} timeTable={timeTable}/>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Table;
