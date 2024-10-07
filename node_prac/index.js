const express = require('express');
const path = require('path');
const app = express();

// logger middleware gets invoked before the request goes to the actual route
function logger(req,res,next){
    console.log('control is in middleware')
    console.log('The time is: '+ Date.now())
  //  const now = new Date();
    //console.log(now); // Outputs the current date and time

    next(); // transfers the request to actual route
}

app.get('/', (req, res) => {
    res.send(`
        please follow the below 2 Links to either open / download the file
        <br/>
        <a href='http://localhost:5000/downloadFile'>Download</a>
        <br/>
        <a href='http://localhost:5000/sendFile'>Open Image</a>
    `)
})

app.get('/sendFile', logger, (req, res) => {
    res.sendFile(path.resolve(__dirname, 'nodejs.png'));
    console.log(path.resolve(__dirname, 'nodejs.png'))
});
app.get('/downloadFile', (req, res) => {
    res.download(path.resolve(__dirname, 'nodejs.png'));
    console.log(path.resolve(__dirname, 'nodejs.png'))
});

app.listen(5000, () => {
    console.log('server running at 5000')
});