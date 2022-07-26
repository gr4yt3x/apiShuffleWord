const express = require('express');
const app = express();

app.get('/:word/randomize',(req,res) => {
    const sort = str => str.split('').sort((a, b) => a.localeCompare(b)).join('');
    let newWord = sort(req.params.word);
    res.send(newWord);
})

app.use((req,res) => {
    res.send('/:word/randomize')
})

app.listen('3000',() => console.log("Servidor ligado na porta 3000..."));
