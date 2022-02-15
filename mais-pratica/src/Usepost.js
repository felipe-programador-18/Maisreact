import {useReducer} from "react"
import axios from "axios"


// here i am rearrange this code about learning and remmerber for the serve!!
//theorical later i getting did all code is more easier i give export to another file!!!


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
    //handling state
    return state
  }
  

const Usepost = Url => {

    const [data, dispatch] = useReducer(reducer,
        { loading:false,
             data: {} } )
    
             const post  = data => {
                dispatch({type: 'REQUEST'})    
               axios
               .post(Url, data)
               .then(res => {
                   dispatch({type:'SUCCESS', data: res.data})
               })
               }
            
     
          return [data, post]
      }



export default Usepost