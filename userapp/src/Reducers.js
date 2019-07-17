
const initialState = {
    pending: false,
    userdata: [],
    error: null,
    islike:false
}

const reducer = (state=initialState,action) => {
//console.log(action.type);
//console.log(action.index);
console.log(action.result)
switch(action.type){

case 'ADD_DETAILS':
    console.log(action.result)
    return {

    ...state,
    userdata: action.result
    }


return state;
}
}

export default reducer