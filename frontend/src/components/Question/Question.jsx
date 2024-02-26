import React from "react";

function Question({ quesNumber,no, options }) {
  
  return (
    <>
      <div className=" sm:min-w-[80%]  max-w-[95%] m-[auto] p-10 bg-gray-950 rounded-xl border-gray-950 mt-0  text-center mb-5 shadow-xl shadow-neutral-700">

        <div className="min-h-[100px] text-start mb-2 ">

           <h3><span>{no+1}. </span> {quesNumber} </h3>
        </div>
        <div className="min-h-[100px]  ">
          <div className="min-h-[100px] border rounded-xl mb-5 border-green-400">
           O {options[0].option1}
          </div>
          <div className="min-h-[100px] border rounded-xl mb-5 border-green-400">
            {options[0].option2}
          </div>
          <div className="min-h-[100px] border rounded-xl mb-5 border-green-400">
            {options[0].option3}
          </div>
          <div className="min-h-[100px] border rounded-xl mb-5 border-green-400">
            {options[0].option4}
          </div>
        </div>
      </div>
    </>
  );
}

export default Question;

// shadow-xl shadow-neutral-700 border border-gray-400
// {
//   options.map((i)=>(
//       <p> {i}</p>
//   ))
// }
