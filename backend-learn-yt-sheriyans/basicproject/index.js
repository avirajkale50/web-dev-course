const { log } = require('console');
const fs = require('fs')

/*
what we are learning in filesystem of node
writefile
appendfile
copyfile
reanme
unlink
*/

//to run the file with node -> node file.js

//writefile
// fs.writeFile("hey.txt","Hello World",function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })

//appendfile
// fs.appendFile("hey.txt"," How are you",function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })

//rename
// fs.rename("hey.txt","hello.txt",function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })

//copyFile
// fs.copyFile("hello.txt","./copy/copy.txt",function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

//unlink -- deleting the file
// fs.unlink("hello.txt",function(err){
//     if(err) console.log(err);
//     else console.log("removed");
    
// })

//rm -- to remove the folder 
// fs.rm("./new",{recursive:true},function(err){
//     if(err) console.log(err);
//     else console.log("removed");
// })

//how to make a folder , read it , open it

const http = require('http');
const server = http.createServer(function(req,res){
    res.end("Hello World");
})

server.listen(3000);