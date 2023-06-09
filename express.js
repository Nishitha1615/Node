// command to run-npm run dev

import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv' 
dotenv.config()
// const express = require('express') 
// const { MongoClient } = require('mongodb');// 3rd party package
const app = express()
app.use(express.json());
const PORT=process.env.PORT;
const storybooks = [
    {
        id:"001",
      name: "Charlotte's web",
      poster:
        "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
      rating: 8.8,
      summary:
        "The novel tells the story of Link livestock pig named Wilbur and his friendship with Link barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.",
        language: "English",
    },
    {
        id:"002",
      name: "The power of your subconscious mind",
      poster:
        "https://imgv2-1-f.scribdassets.com/img/word_document/506884166/original/216x287/f39dce63c4/1666992162?v=1",
      rating: 7,
      summary:
        "Your subconscious mind is Link powerful force to be reckoned with. It makes up around 95% of your brain power and handles everything your body needs to function properly, from eating and breathing to digesting and making memories",
      trailer: "https://www.youtube.com/embed/Solb9uA-tgQ",
      language: "Hindi",
    },
    {
        id:"003",
      name: "Attitude is everything ",
      poster: "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
      rating: 8.1,
      summary:
        "Attitude, In psychology, Link mental position with regard to Link fact or state. Attitudes reflect Link tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses Link person makes.",
        language: "Tamil",
    },
    {
        id:"004",
      name: "The Secret",
      poster: "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
      summary:
        "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from Link catalogue",
      rating: 8.8,
      language: "English",
    },
    {
        id:"005",
      name: "Discover Your Destiny",
      rating: 6,
      summary:
        "'Discover Your Destiny' is Link story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside.",
      poster: "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
      language: "Tamil",
    },
    {
        id:"006",
      name: "The 5 AM Club",
      poster: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
      rating: 8.6,
      summary:
        "In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses Link fictitious story about Link billionaire mentor teaching Link struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success.",
        language: "Telugu",
    },
    {
        id:"007",
      name: "Atomic Habits",
      poster: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
      rating: 8,
      summary:
        "Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time.",
        language: "Telugu",
    },
    {
        id:"008",
      name: "I Can Do It",
      poster: "https://images-na.ssl-images-amazon.com/images/I/81T3L1yTJwL.jpg",
      rating: 8,
      summary:
        "Hay shows you that you “can do it”—that is, change and improve virtually every aspect of your life—by understanding and using affirmations correctly. Louise explains that every thought you think and every word you speak is an affirmation. Even your self-talk, your internal dialogue, is Link stream of affirmations.",
        language: "Hindi",
    },
  ];

// const MONGO_URL="mongodb://127.0.0.1:27017"

const MONGO_URL=process.env.MONGO_URL;
// console.log(process.env);
async function createConnection()
{
  const client=new MongoClient(MONGO_URL);
  await client.connect();
  console.log("MongoDB is connected")
  return client;
  
}

const client=await createConnection();






















  // Rest EndPoints 

// -> app.get('/', function (req, res) {
//   res.send('Hello!! i am nishitha')
// })

//get all the books

// ->  app.get('/storybooks', function (req, res) {
//     res.send(storybooks)
//   });

  //get books by id
 // getting locally

// -> app.get('/storybooks/:id', function (req, res) {
//     const {id}=req.params
//     console.log(req.params);
//     const books=storybooks.find((bk)=>bk.id==id);
//     res.send(books);
//   });


// getting from mongodb

app.get('/storybooks/:id', async (req, res) =>{
      const {id}=req.params
      console.log(req.params);
      const books=await client.db("practicedb").collection("books").findOne({id:id}); 
      //storybooks.find((bk)=>bk.id==id);
      res.send(books);
    });

//delete the book by id from mongodb.

// -> app.delete('/storybooks/:id', async (req, res) =>{
//         const {id}=req.params
//         console.log(req.params);
//         const books=await client.db("practicedb").collection("books").deleteOne({id:id}); 
//         //storybooks.find((bk)=>bk.id==id);
//         res.send(books);
//       });


  //Search Query

  // -> app.get('/storybooks', function (req, res) {
  //   const {language}=req.query;
  //   console.log(req.query,language);
  //   storybooks.filter((bk)=>bk.language==language);
  //   res.send(storybooks.filter((bk)=>bk.language===language))
  // });

  //get the following books by using the search query:
  // /storybooks -to get all the books
  // /storybooks?language=English -only English books
  // /storybooks?language=English&rating=8 - filter by language and ratiing
  // /storybooks?rating=8

  // -> app.get('/storybooks', function (req, res) {
  //   const {language,rating}=req.query;
  //   console.log(req.query,language);
  //   let filterbook=storybooks;
  //   if(language)
  //   {
  //     filterbook=filterbook.filter((bk)=>bk.language===language)
  //   }
  //   if(rating)
  //   {
  //     filterbook=filterbook.filter((bk)=>bk.rating===+rating)
  //   }
  //   storybooks.filter((bk)=>bk.language==language);
  //   res.send(filterbook)
  // });


  // getting the multiple output from the mongo db

   app.get('/storybooks', async (req, res)=> {
    const {language,rating}=req.query;
    console.log(req.query,language);
    if(req.query.rating)
    {
      req.query.rating=+req.query.rating;
    }

    const books=await client.db("practicedb").collection("books").find(req.query).toArray();
    res.send(books);
   
  });



  // to run in the postman :
  // a)login with the google account.
  // b) click on new(near the workspace) and then click on http reques and enter the localhost url from the browser-->enter
  // c)and then add the quires which require it.

  // to connect with mangodb and the node
  // a) install the npm package



  //POST to insert the data in the body

                            // inbuilt middleware says 
                            // the  data is in json.
                            //  |
                        //      |
  app.post('/storybooks',async(req, res)=> {
    const newbook=req.body;
    console.log(newbook);
    const result=await client.db("practicedb").collection("books").insertMany(newbook); 
        res.send(result)
      });
    

app.listen(PORT,()=>console.log("server started  on the port:",PORT));