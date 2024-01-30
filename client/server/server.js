const express = require("express");
const cors = require("cors");
const collection = require('./db')
const app = express()
const PORT = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', cors(), (req, res) => {

})

app.post('/get_fund', async (req, res) => {
    const { name,email, mobile, fund } = req.body;
   

    const data = {
        name: name,
        email: email,
        mobile: mobile,
        fund:fund
    }
    console.log(data)

    await collection.insertMany([data]);
    res.status(200).json({ message: "Success" })
})

app.listen(PORT, () => {
    console.log(`${PORT} port is Running...`)
})