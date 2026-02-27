


//task function which we use to add and get tasks and
// but before we validate them using validator functions we imported



import { validateTitle,validatePriority,validateDueDate,validID} from './validator.js';

const tasks = [];


function addTask(id,title, priority,date){

    if(validateTitle(title)&&validatePriority(priority)&&validateDueDate(date)&validID(id)){
        tasks.push({id,title,priority,date})
    return 1
    }
return 0;
}

function GetallTasks(){
    for(let task of tasks){
    console.log(task.id,task.title,task.priority,task.date);
    }
}


function taskID(id){
    for(let task of tasks){
        
    }

}
export {addTask,GetallTasks,taskID}