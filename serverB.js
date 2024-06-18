const express = require("express")
const cookieParser = require('cookie-parser');

const app = express()
app.use(cookieParser());

const port = 3001

app.get("/", (req, res) => {
    const previousCookie = req.cookies.test

	res.send(`Server B: ${previousCookie}`)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
