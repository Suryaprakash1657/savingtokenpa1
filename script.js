const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET_KEY; // for signing JWT

const encrypt = (payload) => {
  try {
    // Step 1: Create a JWT
    const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });

  return token
  }catch(error){
    console.log("error",error)
  }
  
};

const decrypt = (encryptedToken) => {
  try {
   

    // Verify JWT
    const decoded = jwt.verify(decrypted, jwtSecret);
    return decoded;
  }catch(error){
    console.log("error",error)
  }

};

module.exports = {
  encrypt,
  decrypt
};
