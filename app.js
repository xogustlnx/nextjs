
// const http = require('http')
const express = require('express')
const cors = require('cors')

// const hostname= '127.0.0.1'
const port = process.env.PORT || 3000; // 포트 불러오기 나중에 80이 된다.
const app= express()

// const server = http.createServer((req,res)=>{
//   res.statusCode=200
//   res.setHeader('Content-Type','text/plain')
//   res.end('Hello World')
// })

// server.listen(port, hostname, () =>{
//   console.log(`Server running at http://${hostname}:${port}/`)
// })

//get 은 읽는 것, post 는 변경(만드는) 것

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());
app.use("/static", express.static('public')); 

app.listen(port, () => console.log(`Server up and running on port ${port}.`));

app.get("/", (req, res) => {
  console.log('---');
  res.json({ message: "Welcome to our application." });
});

app.get("/products/:id", cors(), function (req, res, next) {
  res.json({ msg: `This is CORS-enabled for a Single Route ${req.params.id}` });
});


app.post("/image/get", async (req, res) => {
	const url = "https://www.ringleplus.com";
	res.json(url);
});

