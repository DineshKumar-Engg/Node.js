const Jimp = require('jimp')
const fs =require('fs')
const QrReader = require('qrcode-reader')
const QRCode =require('qrcode')

QRCode.toFile('H:/VS code/Node.js/qrcode/file.png','This test change to QRcode',{
    errorCorrectionLevel:'H',
    type:'png'
},function(err){
    if(err) throw err
    console.log('qr code saved');
})

// const buffer = fs.readFileSync('/VS code/Node.js/qrcode/file.png')

// Jimp.read(buffer, function(err, image) {
//     if (err) {
//         console.error(err);
//     }
// const qrCodeInstance = new QrReader()

// qrCodeInstance.callback = function(err,value){
//     if (err) {
//         console.error(err);

//     }
//     console.log(value.result);
//     console.log(value);
// };
// qrCodeInstance.decode(image.bitmap);
// }
// )