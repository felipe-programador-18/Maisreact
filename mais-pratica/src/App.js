import {React,useState} from 'react'
import './App.css'



const Paragraph = (props) =>{
  return(
    <p>{props.text}
     </p>
  )

}


function App() {
  
  const [num , setnum] = useState(0)
  const increased = () =>{
     setnum(num+1)
  }
  
  const decrement =  () =>{

     if(num > 0){
       setnum(num-1)
     }
  }



  return (
    <div className="App">
     <h1> Practice more react!!!</h1>
     <Paragraph text={num} />
     <button onClick={increased}>+</button>
     <button onClick={decrement}>-</button>  
    </div>
  );
}

export default App;
