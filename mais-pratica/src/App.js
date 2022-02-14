import {React,useState, useReducer, useEffect} from 'react'
import './App.css'
import axios from 'axios'



const Paragraph = (props) =>{
  return(
    <p>{props.text}
     </p>
  )

}

const Opchange =  (props) =>{
  return(
   <option> {props.change} </option>
  )
}

const Url= "https://moreonetime-90b5b-default-rtdb.firebaseio.com/movimentacao.json"

const reducer = (state, action) =>{
  
  if(action.type === 'REQUEST'){
    return {
      ...state,
      loading: true
    }
  }
  if(action.type === 'SUCCESS'){
    return {
      ...state,
      loading: action.data
    }
  }




  return state
}


function App() {
  
  const [cidade, setcidade] = useState('')
    
  const [data, dispatch] = useReducer(reducer,
     { loading:true,
          data: {} } )
  
  useEffect(() =>{
    dispatch({type:'REQUEST'})
    axios
    .get(Url)
    .then(res => {
      dispatch({type:'SUCCESS', data: res.data})
    })
  }, [])
  
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


     <hr></hr>

       <p className='more'> {JSON.stringify(data)} </p>

        <hr></hr>

        <select   state={cidade} onChange={e=> setcidade(e.target.value)}>
        <Opchange change='Porto Alegre'    />
        <Opchange change='Floarianopolis' />
        <Opchange change='Rio de janeiro'  />
        <Opchange change='São Paulo'    />
        </select>
          
          <p> Who city you want living ? {cidade} </p>
    </div>
  );
}

export default App;
