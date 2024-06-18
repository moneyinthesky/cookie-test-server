const express = require("express")
const cookieParser = require('cookie-parser');

const app = express()
app.use(cookieParser());

const port = 3000

app.get("/", (req, res) => {
	res.cookie("test", "value")
       .redirect(307, `http://localhost:3001`)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
