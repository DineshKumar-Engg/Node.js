const express = require('express')
const app = express()
const router = require('express').Router()
const authController = require('./Controller')
app.use(express.json())
const Jimp = require('jimp')
const fs =require('fs')
const QrReader = require('qrcode-reader')

router.post('/register',authController.resgister)
// router.post("/login", authController.login);
// router.get("/test", authController.test);
app.use("/auth",router);

// const buffer = fs.readFileSync('/VS code/Node.js/qrcode/image/register.png')

// Jimp.read(buffer, function(err, image) {
//     if (err) {
//         console.error(err);
//     }
// const qrCodeInstance = new QrReader()

// qrCodeInstance.callback = function(err,value){
//     if (err) {
//         console.error(err);

//     }
//     const data = value.result;
//     const num = data.match("dinesh")
//     console.log(num);
    
// };
// qrCodeInstance.decode(image.bitmap);
// }
// )


const port = process.env.PORT || 3001;
app.listen(port, () => {
console.log(`Listening to port ${port}...`);
});
