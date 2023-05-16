import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { CONFIG } from './config/config'
const { PORT } = CONFIG
const app = express()
app.use(cors())

app.listen(PORT, () => {
  console.log('Servidor en http://localhost:3000')
})
