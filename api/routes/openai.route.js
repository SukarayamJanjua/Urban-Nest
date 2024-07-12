import express from "express";
import {config} from "dotenv"
import OpenAI from "openai";
import Configuration from "openai";


config();
const router = express.Router();
// const client = OpenAI();


// router.get("/aichat", async (req, res) => {
//     const openai = new OpenAI({
//         apiKey: process.env.OPENAI_KEY,
//     });
//     // const openai = new OpenAIApi(configuration);

//     try {
//         const response = await openai.chat.completions.create({
//             model: "gpt-3.5-turbo",
//             messages: [{ role: "user", content: "Hello ChatGPT" }],
//         })
//         .then(res =>{
//             console.log(res.data.choices[0].message.content);
//         })
//         // res.status(200).json(response.data.choices);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });
router.get("/aichat", (req, res)=>{

    const openai = new OpenAI(
        new Configuration({
            apiKey: process.env.OPENAI_KEY3
        })
    )

    openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{role : "user", content: "Hello ChatGPT"}]
    }).
    then(res=>{
        console.log(res);    
    
    })
})

export default router;

