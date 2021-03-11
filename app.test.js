const micro = require('micro')
const test = require('ava')
const listen = require('test-listen')
const fetch = require('node-fetch')

const app = require('./app')

test.before(async (t) => {
  t.context.server = micro(app)

  t.context.url = await listen(t.context.server)
})

test.after.always((t) => {
  t.context.server.close()
})

test('Welcome to Micro', async (t) => {
  const response = await fetch(t.context.url)
  const body = await response.text()

  t.is(body, 'Welcome to Micro')
})
