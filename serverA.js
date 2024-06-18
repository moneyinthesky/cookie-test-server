const express = require("express")
const cookieParser = require('cookie-parser');

const app = express()
app.use(cookieParser());

const port = 3000

app.get("/", (req, res) => {
	res.cookie("test", "value")
       .redirect(307, `https://cookie-test-server-b.onrender.com/`)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
