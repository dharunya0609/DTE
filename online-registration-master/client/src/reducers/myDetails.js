const detailsReducer = (state={data:null},action) =>{
    switch(action.type){
        case 'SET_DEFAULT_DETAILS':
            if(state.data==null)
                return {data:action.payload}  
            return {...state}
        case "SET_DETAILS":
            return state={data:action.payload}
        default:
            return state
    }
}

export default detailsReducer