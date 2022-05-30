const initialState=0;
const changeTheNumber=(state=initialState,action)=>{
    console.log(action.type);
    switch(action.type){
        case 'INCREMENT':
            console.log('I was in increment')
            return state+1;
        case 'DECREMENT':
            console.log('I was in decrement')
            return state-1;
        default:
            console.log('I was in default')
            return state;
    }
}
export default changeTheNumber;