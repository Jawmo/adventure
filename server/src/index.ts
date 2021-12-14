import { PrismaClient } from '@prisma/client'
import fastify, { FastifyRequest } from 'fastify'

const app = fastify({ logger: true })
const prisma = new PrismaClient()

// Declare a route
app.get('/', async (req, res) => {
  const users = await prisma.user.findMany()
  return users
})

type UserRequest = FastifyRequest<{ Params: { id: string } }>

app.get('/:id', async (req: UserRequest, res) => {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(req.params.id) }
  })
  return user
})

// Run the server!
const start = async () => {
  try {
    await app.listen(8080, '0.0.0.0')
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()
