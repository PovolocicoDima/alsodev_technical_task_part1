import express from 'express'
import fs from 'fs'
import path from 'path'

const app = express()
const PORT = 3000

// Middleware для разбора JSON в теле запроса
app.use(express.json())

const __dirname = path.dirname(new URL(import.meta.url).pathname)

// Маршрут для получения информации о партнерах
app.get('/api/partners', (req, res) => {
  // Чтение данных из файла partners.json
  const filePath = path.join(__dirname, 'db', 'partners.json')

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      res.status(500).send('Internal Server Error')
      return
    }
    // Отправка данных клиенту
    res.json(JSON.parse(data))
  })
})

// Маршруты для получения информации о каждом партнере
const partners = [
  'food-band',
  'gusi-lebedi',
  'palki-skalki',
  'pizza-burger',
  'pizza-plus',
  'tanuki',
]
partners.forEach((partner) => {
  app.get(`/api/partners/${partner}`, (req, res) => {
    // Чтение данных из соответствующего файла JSON
    const fileName = `${partner}.json`
    const filePath = path.join(__dirname, 'db', fileName)
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err)
        res.status(500).send('Internal Server Error')
        return
      }
      // Отправка данных клиенту
      res.json(JSON.parse(data))
    })
  })
})

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
