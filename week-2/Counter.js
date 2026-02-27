// 1.Exam portal simulator:
// -----------------------------
// When a student submits an exam:

//         Immediately show: “Exam submitted successfully”
//         After 2 seconds → show: “Evaluating answers…”
//         After 4 seconds → show: “Result: Pass”



// 2.OTP Countdown Simulator (Console App)
// ------------------------------------
        
//         Simulate OTP sending flow in Node.js:
        
//         Show “OTP Sent Successfully”
        
//         Start 10-second countdown
        
//         Allow resend only after countdown ends



// console.log("Exam submitted successfully");




// setTimeout(() => {
//     console.log("Evaluating answers…");
// }, 2000);


// setTimeout(() => {
//     console.log("Result: Pass");
// }, 4000);


// console.log("-----------------------------------------------------------------------------------");

console.log("OTP Sent Successfully");




let counter = 0;
const id = setInterval(() => {
  counter++;
  console.log(counter);
  if (counter >= 10)clearInterval(id);
}, 1000);


// setTimeout(() => {
//     for(i=10;i>10;i--){
//         console.log(i);
//     }
// }, 1);
    
setTimeout(() => {

    console.log("resend");
}, 11000);

































































