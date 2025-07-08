import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import { db } from '../../src/db/connection.ts'
import { schema } from '../../src/db/schema/index.ts'

export const getRoomsRoute: FastifyPluginAsyncZod = async (app) => {
    app.get('/rooms', async () => {
        const results = await db.select({
            id: schema.rooms.name,
            name: schema.rooms.name
        }).from(schema.rooms).orderBy(schema.rooms.createdAt)
        return results
    })
}