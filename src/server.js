import express from 'express'
import db from './db.js'
import userRoutes from './routes/usersRoutes.js'

const app = express()
const port = 3000

app.use(express.json())

db.sync(() => console.log('Bando de dados preparando'))

app.use('/users', userRoutes)

app.listen(3000, () => console.log("Server rodando na porta "+port))