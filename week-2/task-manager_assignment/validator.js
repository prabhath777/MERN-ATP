

//validator functions 


function validID(id){
    if(!id){
        return "add the id"
    }
    return true
}
function validateTitle(title){
    if (!title)
        return false
    if (title.length < 3)
        return false
    else
        return true
}

function validatePriority(priority){
    if (priority === 'low' || 'med' || 'high')
        return true
    
    else
        return false
    
}

function validateDueDate(date){
        return true
}


export {validatePriority,validateTitle,validateDueDate,validID}

