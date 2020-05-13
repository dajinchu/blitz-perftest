import { PrismaClient } from "@prisma/client"
export * from "@prisma/client"

const prisma = new PrismaClient({
  log: ['info'],
  forceTransactions: true
})

export default prisma
