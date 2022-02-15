

// here i am rearrange this code about learning and remmerber for the serve!!
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
}

