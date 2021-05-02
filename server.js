const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 8000;

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname , './index.html'));
})

app.listen(port , (err) => {
    if(err) {
        console.error(err);
        return;
    }else{
        console.log('Server Started');
    }
})