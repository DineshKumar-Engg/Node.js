
//------------ without using express---------------------//
// const http = require("http");
// const server = http.createServer((req,res)=>{
//     console.log("got  the result");
//     res.end("Here is my response")

// })
// server.listen(8080,'127.0.0.1',()=>{
//     console.log("My server is live");
// })


//----------------------------------------------------------//

//------ using express ------------------------------//
// const http = require("http");
// const express =require('express')
// const app = express();






// const server = http.createServer(app)
// server.listen(8080,'127.0.0.1',(req,res)=>{
//     console.log("My express server is live");
    
// })


//----------------------------------------------------------//
// 127.0.0.1:8080

// using postman

const http = require("http");
const express =require('express');

const app = express();

// app.get('/',(req,res)=>{                   //-------this app.get result of -->localhost:8080-->this json                
//     console.log("this is get");
//     // res.end("im ending") //---------------status code 200

//     res.status(400);
   

//     res.json({                     //--------------------------- testing with json object return
//         "message":"testing",
//         "data":"working",
//         "status":"success"
//     })
//     res.end("here im ending ")  //--------------------for status code we set 400
// })

app.get('/movie',(req,res)=>{   //-------this app.get result of -->localhost:8080/movie---->movie json
    res.status(200);
    res.json({
        
            "Instructions": "delete everything in this object and make your own JSON object using different data.",
            "Title": "The Graduate",
            "Year": "1967",
            "Rated": "Approved",
            "Released": "22 Dec 1967",
            "Runtime": "106 min",
            "Genre": [
              "Comedy",
              "Drama",
              "Romance"
            ],
            "Director": "Mike Nichols",
            "Writers": [
              "Calder Willingham (screenplay)",
              "Buck Henry (screenplay)",
              "Charles Webb (based on the novel by)"
            ],
            "Actors": [
              "Anne Bancroft",
              "Dustin Hoffman",
              "Katharine Ross",
              "William Daniels"
            ],
            "Plot": "Ben has recently graduated college, with his parents now expecting great things from him. At his \"Homecoming\" party, Mrs. Robinson, the wife of his father's business partner, has Ben drive her home, which leads to an affair between the two. The affair eventually ends, but comes back to haunt him when he finds himself falling for Elaine, Mrs. Robinson's daughter.",
            "Language": "English",
            "Country": "USA",
            "Awards": "Won 1 Oscar. Another 22 wins & 13 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTQ0ODc4MDk4Nl5BMl5BanBnXkFtZTcwMTEzNzgzNA@@._V1_SX300.jpg",
            "imdbRating": "8.1",
            "imdbVotes": "183,131",
            "imdbID": "tt0061722"
          
    })
})




const server = http.createServer(app)
server.listen(8080,'127.0.0.1',()=>{
    console.log("My express server is live");
})
