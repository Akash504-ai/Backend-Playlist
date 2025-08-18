const EventEmmiter = require ("events");

const emmiter = new EventEmmiter();

// emmiter.on("greet",()=>{
//   console.log("Hi! Akash Santra");
// })

// emmiter.emit("greet");

//---another good of doing it---//
emmiter.on("greet",(arg)=>{
  console.log(`Hi! ${arg.username}, you are a ${arg.prof} right...`);
})

emmiter.emit("greet",{username : "Akash Santra", prof : "Full Stack Dev"});