const setData = (data) =>{
    return (dispatch)=>{

        // console.log("Hello")
        dispatch({type:"set my data dispatch ka func ha redux connect kr rha or ye reducer ke sore ma mil jaegi whan ju function banaya ha uske 2sre param ma ye mil jaega"
        ,data: data})
    }
}
export{
    setData
}