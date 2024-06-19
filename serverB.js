const express = require("express")
const cookieParser = require('cookie-parser');

const app = express()
app.use(cookieParser());

const port = 3001

app.get("/", (req, res) => {
	res.send(`Server B Subdomain Cookie: ${req.cookies["cross-subdomain-test"]} / Default Cookie: ${req.cookies["default-test"]}`)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
