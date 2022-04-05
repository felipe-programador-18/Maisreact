import {React,useState} from 'react'
import './App.css'
import Useget from './Useget'
import Usepost from './Usepost'
import Opchange from './opchange'
import Paragraph from './para'




const Url= "https://moreonetime-90b5b-default-rtdb.firebaseio.com/movimentacao.json"

const Numbering = [10,20,30,40]
const Together = Numbering.map((Numbering) =>
   <li>{Numbering}</li>
)

const Peer = [1,2,3,4,5,6]
const Union = Peer.map((Peer) =>{
  return <li> {Peer *2} </li>
})

const Getop = (props) =>{
  return(
    <option> {props.tara} </option>
  )
}

  


function App() {
  
  const data = Useget(Url)
  const datatwo =  Useget("https://moreonetime-90b5b-default-rtdb.firebaseio.com/movimentacao.json")
  
  const [postDa, post] = Usepost(Url) 
   
  const Savepost = () =>{
    post({poupanca:1000, descricao:'poupanca'})
  }
  
  //flag this to make new test!!
  const newTest = Useget("https://jsonplaceholder.typicode.com/users" )

  const [cidade, setcidade] = useState('')
   
  const[re, setrem] = useState('')
  
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
     
      <ul> {Union} </ul>
      
     <ul>{Together} </ul>
     <hr></hr>

       <p className='more'> {JSON.stringify(data)} </p>

        <hr></hr>
        
        <p>This is another apirest, but with same Url {JSON.stringify(datatwo)}  </p>
        <hr></hr>
        <hr></hr>
       
        <select   state={cidade} onChange={e=> setcidade(e.target.value)}>
        <Opchange change='Porto Alegre'    />
        <Opchange change='Floarianopolis' />
        <Opchange change='Rio de janeiro'  />
        <Opchange change='São Paulo'    />
        </select>
          
          <p> city you want living is : {cidade} </p>

         <select une= {re} onChange={e=> setrem(e.target.value)}>
         <Getop tara='1'    />
         <Getop tara='2'     />
         <Getop  tara='3'   />
         <Getop  tara='4'   />
         <Getop tara='5'  />
         
         </select>
           
         <p>voce selecionou {re}</p>








          <hr></hr>
          <p>testing about Api rest with post {JSON.stringify(postDa)}</p>  
        <button onClick={Savepost}>SAVE</button>

          <p> {JSON.stringify(newTest)} </p>
         
         <ul>
         {
           <li> {JSON.stringify(newTest)} </li>
         }
         
         </ul>

      

    </div>
  );
}

export default App;
