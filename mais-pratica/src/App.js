import {React,useState} from 'react'
import './App.css'




const Paragraph = (props) =>{
  return(
    <p>{props.text}
     </p>
  )

}


function App() {
  // set data of usestate
  const [num , setnum] = useState(0)
  const Increased = () =>{
     setnum(num+1)
  }
  
  const Decrement =  () =>{
     if(num > 0){
       setnum(num-1)
     }
  }



  return (
    <div className="App">
     <h1> Practice more react!!!</h1>
     <Paragraph text={num} />
     <button  onClick={Increased} >+ </button>
     <button onClick={Decrement}  >-</button>  
    </div>
  );
}

export default App;
