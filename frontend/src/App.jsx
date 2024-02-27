import "./App.css";
import Question from "./components/Question/Question";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  // let windowsize  = useRef([window.innerWidth])
  // console.log(windowsize.current[0])
  const [quizdetails, setQuizdetails] = useState([]);
  const navigate = useNavigate();
  const url = "https://myweb-2t4i.onrender.com/api/v1/quiz/getalluser";
  const userdata = {
    name: "shivam",
    contact: "1233",
    email: "shivam1234@gmail.com",
    questions: 1,
    timeTaken: 4,
  };
  
// get all user Api call 
    axios.get(url)
    .then((res)=>(setQuizdetails(res.data[0].questions)))

    const handleSubmitquiz =  (e) => {
      e.preventDefault();
      console.log("paper submited")
      console.log(e);
     
    };

  return (
    <>
      <div className="pt-32 grid sm:grid-cols-1  bg-slate-400">
       {quizdetails.map((paper,index)=>(
        <Question key={index} handleSubmitquiz={handleSubmitquiz} quesNumber={paper.question} options={paper.options} no={index} />
       ))}
       <div className="grid sm:grid-1 gap-10 border rounded-md border-emerald-400  min-w-[100px] m-auto mb-5  bg-slate-900 ">
      <button
        onClick={()=>navigate("/contest/result")}
          type="submit"
          className=" bg-slate-900 p-3  text-4xl text-center   font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-500 "
         
        >
          Submit
        </button>
      </div>
      </div>
      
    </>
  );
}

export default App;
