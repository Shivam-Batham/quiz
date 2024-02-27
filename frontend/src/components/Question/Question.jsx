import React from "react";
import "./q.css";
function Question({handleSubmitquiz, quesNumber, no, options }) {
  const handleSubmitpaper= handleSubmitquiz;
  return (
    <>
      <div className=" sm:min-w-[80%]  max-w-[95%] m-[auto] p-10 bg-gray-950 rounded-xl border-gray-950 mt-0  text-start mb-5 shadow-xl shadow-neutral-700">
        <div className="min-h-[50px] text-start  ">
          <h3>
            <span>{no + 1}. </span> {quesNumber}{" "}
          </h3>
        </div>

        {/* options conatiner */}
        <form onSubmit={handleSubmitpaper}>

          <div className="grid grid-cols-12 mb-5 ">
            <input className="h-5" type="radio" id="option1" name="options" value="option1" />
            <label htmlFor="option1" className="col-span-11">
              {options[0].option1}  
            </label>
          </div>

          <div className="grid grid-cols-12 mb-5 ">
            <input className="h-5" type="radio" id="option1" name="options" value="option1" />
            <label htmlFor="option1" className="col-span-11">
              {options[0].option2}  
            </label>
          </div>
          <div className="grid grid-cols-12 mb-5 ">
            <input className="h-5" type="radio" id="option1" name="options" value="option1" />
            <label htmlFor="option1" className="col-span-11">
              {options[0].option3}  
            </label>
          </div>
          <div className="grid grid-cols-12  ">
            <input className="h-5" type="radio" id="option1" name="options" value="option1" />
            <label htmlFor="option1" className="col-span-11">
              {options[0].option4}  
            </label>
          </div>

        </form>
      </div>
    </>
  );
}

export default Question;
