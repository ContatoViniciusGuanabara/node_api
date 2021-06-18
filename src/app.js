const express = require('express');
const app = express();

app.use(express.json())

app.get('/hello_word', (req, res) => {
    res.send('Hello word!')
})

app.listen(5000, () => {
    console.log('Server running on port: ' + 5000)
})