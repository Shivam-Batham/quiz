import './App.css'
import Question from './components/Question/Question'


function App() {

  const Questions = ["when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
  "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem but also the leap into electronic typesetting.",
  "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
  "But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
  "when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem"]
  const index = [1,2,3,4,5]
  let i=0;
  const options = [" It was popularised in the 1960s with the release of Letraset sheets containing Lorem","But also the leap into electronic typesetting, remaining essentially unchanged."," It was popularised in the 1960s with the release of Letraset sheets containing Lorem","option 4"]
  return (
    <>
      <div className='grid sm:grid-cols-1   bg-black'>
        
        {
         index.map((quesNumber)=>(
          <Question quesNumber={quesNumber} no={index[i++]} options = {options} />
         ))
        }
        

       
      </div>
    </>
  )
}

export default App
