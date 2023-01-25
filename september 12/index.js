// const EventEmitter = require('events');
// const eventEmitterObject = new EventEmitter();

// eventEmitterObject.on('greeting',()=>{
//     console.log("Hello");
// })
// eventEmitterObject.on('greeting1',()=>{
//     console.log("Hello1");
// })
// eventEmitterObject.on('greeting2',()=>{
//     console.log("Hello2");
// })
// eventEmitterObject.on('greeting3',()=>{
//     console.log("Hello3");
// })

// eventEmitterObject.emit('greeting')
// eventEmitterObject.emit('greeting1')
// eventEmitterObject.emit('greeting2')
// eventEmitterObject.emit('greeting3')


// const EventEmitter = require('events');
// const eventEmitterObject = new EventEmitter();
//=> we dont need this both line,because it create new object both index,greeting files

// const {registerEvent,eventEmitterObject} = require('./EventRegister');
// registerEvent('newEvent');
// eventEmitterObject.emit('newEvent')

//const {readFullFiles,readFileParts}=require('./streams')
const{createFile,updateFile,readFile}=require('./fileCrud')
//,deleteFile

//readFileParts()
//readFullFiles()

createFile();
updateFile("\n this new data");
//deleteFile();
readFile();


//const {myFileWriter}=require('./fileCrud');

// myFileWriter();
//  myFileUpdater()
//   myFileReader()
//    myFileDeleter()