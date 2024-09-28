import { Hono } from 'hono'
import { renderer } from './renderer'
import { Card } from './card'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <Card title="Hi Hono" onClick={() => console.log('hi')} />
  )
})

export default app
