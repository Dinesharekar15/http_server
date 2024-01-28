const http = require('http')
const fs = require('fs')

const url=require("url");

const server = http.createServer((req, res) => {

    if(req.url==="/favicon.ico"){
        return 
    }
    const log = `${Date.now()} :${req.method} :${req.url} : New requist recive\n`
   
    const myurl=url.parse(req.url,true)
    console.log(myurl)

    fs.appendFile("log.txt", log, (err, data) => {
        
        switch (myurl.pathname) {
            case "/":
                if(req.method==="GET")res.end("Home page yaaa")
                break;
            case "/about":
                const username=myurl.query.myname
                res.end(`hiii ${username}`)
                break;

            case"/singup":
                if(req.method==="GET"){
                res.end("singup page")
                }
                else if(req.method==="POST"){
                    res.end("Done Singup")
                }
                break;

            case "/search": 
                const search=myurl.query.search_q
                res.end(`searching for ${search}`)
                break;
            default:
                res.end("404 error page not found")
        }
    })


})

server.listen(7000, () => console.log('Server is running on port 7000'));