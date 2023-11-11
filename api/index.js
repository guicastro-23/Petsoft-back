const express =require("express");
const routes = require('./routes')

const cors = require("cors");

const app = express()
app.use(cors({origin:"*"}));



const port = 8000;

routes(app)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
module.exports = app