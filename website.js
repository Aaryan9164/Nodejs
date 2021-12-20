
const fs=require('fs');
const http= require('http');
const port= process.env.PORT || 3000;
const server= http.createServer((req,res)=>{
    
    res.setHeader('Content-Type','text/html')
    console.log(req.url)
    if(req.url=='/hello'){
        res.statusCode=200;
        const data=fs.readFileSync('index.html');
        res.end(data.toString());
    
    }
    else if(req.url=='/about'){
        res.statusCode=200;
        res.end('<h1>This is code with Aaryan</h1> <p>Hey this the way to rock the world</p>');
    }
    else if(req.url=='/'){
        res.end('<h1>About code with Aaryan</h1> <p>Hey this about code with Aaryan</p>');
    }
    else{
        //res.harry();
        res.statusCode=404;
        res.end('<h1>Page was not found on this server</h1> <p>NOT FOUND</p>');
    }
  
})

server.listen(port, ()=>{
    console.log('Server is listening on port ${port}');

}); 