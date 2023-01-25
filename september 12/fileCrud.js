const fs =require('fs');
const pathOfNewFile = __dirname +'/crud.txt';

function createFile(){
    fs.writeFileSync(pathOfNewFile,'this new initial files')
}
function updateFile(data){
    fs.appendFile(pathOfNewFile,data,(err)=>{
        if(err) console.log("error occured" ,err);
        else console.log("files updated");
    })
}
// function deleteFile(){
//     fs.unlinkSync(pathOfNewFile)
//     console.log("files deleted");
// }
function readFile(){
    fs.readFileSync(pathOfNewFile)
    console.log("files readed");
}
module.exports={createFile,updateFile,readFile}


//,deleteFile