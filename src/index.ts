import express from "express"
import dotenv from "dotenv"

dotenv.config();
const app = express();
const port = process.env.PORT;
app.get('/appget/', (request, response)=>{
    response.send('hello');
});


app.use(express.static("public"));
// app.use(bodyParser.json());
// app.use(cors());
// app.use(function (req, res, next) {
//     // console.log(req.header('Origin'));
//     res.setHeader('Access-Control-Allow-Origin', "*");
//     res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
//     next();
// });
// app.express.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => console.log(`Running on port ${port}`));
