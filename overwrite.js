function addTwo(userName="sam"){
        if(!userName){
            console.log("passing value undefined");
            return
        }
        return `hi ${userName} just logged in`
        // return result
        
    }
    
    console.log(addTwo("rohan"));
    
    