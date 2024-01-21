const PgPool = require('pg-pool')
const express = require('express')

const pool = new PgPool({
  database: 'postgres',
  max: 20,
})

const app = express()

app.get('/', (_, res) => {
  pool.query('SELECT pg_sleep(1)', (err, result) => {
    if (err) {
      res.status(500).send(err.toString())
    } else {
      res.json({ foo: 'bar' })
    }
  })
})

app.listen(3050, () => {
  console.log('Listening on port 3050')
})
