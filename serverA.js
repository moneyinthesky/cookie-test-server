const express = require("express")
const cookieParser = require("cookie-parser")

const app = express()
app.use(cookieParser())

const port = 3000

app.get("/", (req, res) => {
	res.send(`Server A Subdomain Cookie: ${req.cookies["cross-subdomain-test"]} / Default Cookie: ${req.cookies["default-test"]}`)
})

app.get("/redirect", (req, res) => {
	res.cookie("cross-subdomain-test", "value", {
		// sameSite: 'none',
		secure: true,
		domain: "moneyinthesky.uk",
	})
		.cookie("default-test", "value", {
			secure: true,
		})
		.redirect(307, `https://server-b.moneyinthesky.uk`)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
