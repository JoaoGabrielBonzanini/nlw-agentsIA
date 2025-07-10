import { fastifyCors } from '@fastify/cors'
import { fastify } from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { createQuestionRoute } from '../http/routes/create-question.ts'
import { createRoomsRoute } from '../http/routes/create-rooms.ts'
import { getRoomQuestionsRoute } from '../http/routes/get-room-questions.ts'
import { getRoomsRoute } from '../http/routes/get-rooms.ts'
import { env } from './env.ts'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: 'http://localhost:5173',
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get('/health', () => {
  return 'ok'
})

app.register(getRoomsRoute)
app.register(createRoomsRoute)
app.register(getRoomQuestionsRoute)
app.register(createQuestionRoute)

app.listen({ port: env.PORT }).then(() => {
  console.log('Server running!')
})
