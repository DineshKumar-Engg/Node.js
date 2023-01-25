 const fs = require('fs'); // fs - give access to read file

 function readFullFiles(){
    const start =Date.now();
    fs.readFile('./Notes.txt','utf-8',(err,data)=>{
        console.log('time taken', Date.now()-start);
        console.log('here is output =', data);
     })
 }
 module.exports= {readFullFiles}

//---------------------------------------------------------------------------------------------------//

 function readFileParts(){
    const streams =fs.createReadStream('./Notes.txt','utf-8')
    streams.on('data',(partialInfo)=>{
        //console.log(partialInfo);
        console.log("partialInfo",partialInfo.length);
    })
    streams.on('end',()=>{
        console.log("read successfully");
    })
    streams.on('error',(err)=>{
        console.log('error occured',err);
    })
}



 module.exports={readFullFiles,readFileParts}
 
