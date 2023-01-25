
const jwt = require('jsonwebtoken')
const QRCode =require('qrcode')
const bcrypt = require('bcrypt')

exports.login = async (req, res) => {
    try {
  
  // __ Extract the secret from the request body. __ \\
      const secret = req.body.secret;
  // __ Validate the secret. __ \\
    const JWT_SECRET = "secretKeySecretkey"

      if ( secret === "VALID_SECRET") {
  // __ Generate a JWT token. __ \\
        const token = jwt.sign({ user:req.body.user }, JWT_SECRET, { expiresIn: '1h' });
  
  // __ Send the JWT token to the client. __ \\
        res.json({ token });
      } else {
  
  // __ If the secret is invalid, return an error. __ \\
        res.status(401).json({ error: 'Invalid QR code' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  exports.test = async (req, res) => {
  
  console.log("Hitting the test route");
  return res.status(200).json( {message: "Hitting the test route"} );
  }

exports.resgister = async(req,res)=>{
  const body = req.body
    const user = req.body.user
    const password =await bcrypt.hash(body.password,6)
  QRCode.toFile('H:/VS code/Node.js/qrcode/image/register.png',[user,password],{
    errorCorrectionLevel:'H',
    type:'png'
  }
  // ,function(err){
  //   if(err) throw err
  //   console.log('qr code saved');
  // }
  )
  res.status(200).json("qr code saved")
  // res.end()
}