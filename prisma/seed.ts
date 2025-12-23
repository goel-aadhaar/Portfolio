import { PrismaClient , Prisma} from "../app/generated/prisma";
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL || '',
})

const pgClient = new PrismaClient({
    adapter,
});

// pgClient.user.create({})