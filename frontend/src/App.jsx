import "./App.css";
import Question from "./components/Question/Question";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [quizdetails, setQuizdetails] = useState([]);

  const url = "https://myweb-2t4i.onrender.com/api/v1/quiz/getalluser";
  const userdata = {
    name: "shivam",
    contact: "1233",
    email: "shivam1234@gmail.com",
    questions: 1,
    timeTaken: 4,
  };
  
  // useEffect(()=>{
    axios.get(url)
    .then((res)=>(setQuizdetails(res.data[0].questions)))
  // },[])
  
quizdetails.map((paper)=>{
        console.log(paper.question)
        console.log(paper.options[0].option1)
        console.log(paper.options[0].option2)
        console.log(paper.options[0].option3)
        console.log(paper.options[0].option4)
       
        
})
  return (
    <>
      <div className="pt-32 grid sm:grid-cols-1   bg-black">
       {quizdetails.map((paper,index)=>(
        <Question key={paper} quesNumber={paper.question} options={paper.options} no={index} />
       ))}
      </div>
    </>
  );
}

export default App;
