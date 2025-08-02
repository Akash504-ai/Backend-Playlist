//Node.js basics
// js runtime environment

// node & npm

//npm init -> package.json -> lekha jokha of the project

const fs = require("node:fs");

//writefile
//appendfile
//copyfile
//rename
//unlink

// //fs.writeFile(file, data[, options], callback)
// fs.writeFile("hey.txt", "Hello World!", (err) => {
//   if(err)
//   {
//     console.error(err);
//   }
//   else console.log("Done");
// })

// //fs.appendFile(path, data[, options], callback)
// fs.appendFile("hey.txt", "This is my World", (err) => {
//   if(err)
//   {
//     console.error(err);
//   }
//   else console.log("Done");
// })

// // fs.rename(oldPath, newPath, callback)
// fs.rename("hey.txt", "Akash.txt", (err) => {
//   if(err)
//   {
//     console.error(err);
//   }
//   else console.log("Done");
// })

// // fs.copyFile(src, dest[, mode], callback)
// fs.copyFile("Akash.txt", "./copy/Arnav.txt", (err) => {
//   if (err) {
//     console.error(err);
//     //console.error(err.message);
//   } else console.log("Done");
// });

// //fs.unlink(path, callback)
// fs.unlink("Hello.txt", (err) => {
//   if (err) {
//     console.error(err);
//   } else console.log("Done");
// });


//protocol - rules(for doing anything in internet)
// http - protocol