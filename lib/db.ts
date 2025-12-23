import { PrismaClient , Prisma } from '@/app/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config';
import { connect } from 'http2';

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL || '',
})

const pgClient = new PrismaClient({
    adapter,
});

// pgClient.user.create({})