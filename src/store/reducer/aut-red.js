const INTIAL_STATE = {
    name: " abc",
    email:"abc@abc.com"
}

export default (state = INTIAL_STATE, action)=>{
    console.log("action -->",action)    
    return state;

} 