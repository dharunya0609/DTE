const courseReducer = (state={data:null},action) =>{
    switch(action.type){
        
        case "FETCH_ALL_COURSE":
            return {...state,data:action.payload}
       
        default:
            return state
    }
}

export default courseReducer