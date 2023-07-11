const express = require('express');
const app = express();
const tasks = require('./router/items')
app.use(express.json());



app.get('/', (req,res) =>{
    res.send("task manager app")
})

app.use('/api/v1/item',tasks)


app.use()
app.use()


tasks





const port = 3000;
app.listen(port, () => {
console.log(`port running at${port}`)
})