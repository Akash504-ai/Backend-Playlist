const EventEmitter = require("events");

const emitter = new EventEmitter();

const eventCount = {
  "user-login": 0,
  "user-purchase": 0,
  "user-update": 0,
  "user-logout": 0
};

emitter.on("user-login", (username) => {
  eventCount["user-login"]++;
  console.log(`Welcome ${username}! You are logged in.`);
});

emitter.on("user-purchase", (username, item) => {
  eventCount["user-purchase"]++;
  console.log(`Hi ${username}! You purchased ${item}.`);
});

emitter.on("user-update", (username, update) => {   
  eventCount["user-update"]++;
  console.log(`Hi ${username}! You updated ${update}.`);
});

emitter.on("user-logout", (username) => {
  eventCount["user-logout"]++;
  console.log(`Bye ${username}!`);
});

emitter.on("Summary", () => {
  console.log("Event Summary:", eventCount);
});

// Emit events
emitter.emit("user-login", "Akash");
emitter.emit("user-purchase", "Akash", "laptop");
emitter.emit("user-update", "Akash", "email");  
emitter.emit("user-logout", "Akash");

emitter.emit("Summary");
