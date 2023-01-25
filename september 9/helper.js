function helper(){
    console.log("helper");
}
function helper1(){
    console.log("helper 1");
}
module.exports={helper,helper1}; // one way of export module


//---------------------------------------------------------------------------------------//

// method 2:- another way of export module...

// module.exports.helper=helper;       
// module.exports.helper1=helper1;       
