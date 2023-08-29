import React from "react";
import Button from "../buttons/Button";
import BoldHead from "../headings/BoldHead";

const Card = () => {
  return (
    <div>
      <div className="block rounded-lg bg-secondary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <div className="border-b-2 border-light ps-6 pe-2 py-0 text-primary flex justify-between items-center">
          <BoldHead heading={"Heading"} />
          <Button
            name={"Close"}
            color={"light"}
            bgColor={"transparent"}
            icon={<i className="fa text-primary fa-2x fa-times"></i>}
            size={"text-base"}
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-primary">
            Primary card title
          </h5>
          <p className="text-base text-primary">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
