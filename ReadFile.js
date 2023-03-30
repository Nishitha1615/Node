//Example 1)

console.log("hello world!!!🌍")

//Example 2) calling with the function
 
const double=(num)=>num*2;

// console.log(double(10));

//Example 3) using process.argv --> we can take the value in command line

 console.log(process.argv,process.argv[2]);
 
 //Example 4) Destructure the process.argv

const[,,n]=process.argv;
console.log(double(n));

//Example 5) Destructure the process.argv using the 2 variables.
//if we add the two numbers its is takeing into the string format to convert this format we to -->add + symbol in front of it.

const sum=(n1,n2)=>n1+n2;
const[,,n1,n2]=process.argv;
console.log(sum(+n1,+n2));

// INBUILT PACKAGES IN NODE.JS:-

// A) os-> info on CPU,memory,directories,etc..
const os=require("os");

console.log("Free Memory:",os.freemem()/1024/1024/1024);
console.log("Total Memory:",os.totalmem()/1024/1024/1024);
console.log("os Version:",os.version());
console.log("platform:",os.platform());
console.log("cpu:",os.cpus());

// B) fs-> read,write,append,unlink,mkdir,readdir,stat,copyFile

const fs = require("fs");
const text="suffering is the essence of success!!!"
fs.writeFile("./write.html",text,(err)=>
{
    console.log("completed writing")
})

// Task 1
// Create the below fies with the quote2="hello i am nishitha" as the content.
// in the /backup folder
//text-1.html
//text-2.html
//text-3.html
//text-4.html
// ......
//text-10.html

quote2="hello i am nishitha" 

for(let i=1;i<=10;i++)
{
    fs.writeFile(`./Backup/text-${i}.html`,quote2,(err)=>
    {
    console.log("completed writing")
})
}

// Task 2 
// node fs.js 20 ->20 files to be created | note-1..html ..... note-20.html.. u have to take the number fom the command line.

const[,,nooffiles]=process.argv;
for(let i=1;i<=nooffiles;i++)
{
    fs.writeFile(`./Backup1/note-${i}.html`,quote2,(err)=>
    {
    console.log("completed writing")
})
}

//Read the file
fs.readFile("./sample.txt","utf-8",(err,data)=>{
    if(err) 
    {
        console.log(err);
    }
    console.log(data);
});

//appending the data to the file
const quote="Good morning";

fs.appendFile("./sample.txt",quote,(err)=>{
    console.log("completed appending..")});

    //delete the file
    fs.unlink("./delete.txt",(err)=>{
        console.log("success")});

// read directory

fs.readdir("./Backup",(err,file)=>{
    if(err)
    {
        console.log(err);
    }
    console.log(file);
});

//delete all the files in ./Backup
fs.readdir("./Backup",(err,data)=>{
data.forEach((filename)=>
{
    fs.unlink(`./Backup/${filename}`,(err)=>
    {
    console.log(`success:${filename}`);
    });
})
});

//fx.writeFile,fs.readFile,fs.appendFile-async
//fs.weiteFileSync,fs.readFileSync,fs.appendFileSync-sync


//to create our own servers we use express as a framework.

//steps to install express
    // a) npm init
    // b) npm i express
    // b)  