const PORT = process.env.PORT || 5000
const Applicaton = require('./faemework/Application')
const userRouter = require('./src/user-router')
const jsonParse = require('./faemework/parseJson')
const parseUrl = require('./faemework/parseUrl')
const mongoose = require('mongoose')

const app = new Applicaton()

app.use(jsonParse)
app.use(parseUrl('http://localhost:5000'))

app.addRouter(userRouter)


const start = async () => {
    try {
        await mongoose.connect(DB)
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT: ${PORT} `))
    } catch (e) {
        console.log(e);
    }
}

start()
