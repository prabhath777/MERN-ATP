// 💡 Exercise 1: Copy & Extend an Array

//                         Goal: Learn array copying with spread
                        
//                         You are given:
//                                 let fruits = ["apple", "banana"];
                        
                        
//                         Tasks
//                               -> Create a new array moreFruits
                              
//                               -> Copy all fruits from fruits
                              
//                               -> Add "orange" at the end using spread
                              
//                               -> Print both arrays
//                         // 
                        
//                         ✅ Expected Output
//                               ["apple", "banana"]
//                               ["apple", "banana", "orange"]
                        
//                         👉 Original array should NOT change.


let fruits = ["apple", "banana"]; 
let copyfruits = [...fruits,"orange"]

console.log(fruits);
console.log(copyfruits);

// Exercise 2: Update User Object
                        
//                         Goal: Learn object cloning & adding new property
                        
//                         You are given:
                                
//                                 let user = {
//                                   name: "Ravi",
//                                   city: "Hyderabad"
//                                 };
                        
                        
                        
//                         Tasks
                        
//                               -> Create a new object updatedUser
                              
//                               -> Copy all properties from user
                              
//                               -> Add a new property age: 25
                              
//                               -> Print both objects
                        
                        
                        
//                         ✅ Expected Output
//                               { name: "Ravi", city: "Hyderabad" }
//                               { name: "Ravi", city: "Hyderabad", age: 25 }
                        
//                         👉 Original object should remain unchanged.

 let user = {
     name: "Ravi",
     city: "Hyderabad"
      };


let copyuser = {...user,age: 25}
console.log(user);
console.log(copyuser);


//create a function that recieves any number of args and return the their sum

function sum(...a){
    let total = 0;
    for (let arg of  a){
        total += arg
                
    }
    return total
}

console.log(sum(1,2,3,4,4));