import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { CONFIG } from './config/config'
import routerApi from './routes'
const { PORT } = CONFIG

const app = express()
app.use(express.json())
app.use(cors())

routerApi(app)

app.listen(PORT, () => {
  console.log('Servidor en http://localhost:3000')
})
