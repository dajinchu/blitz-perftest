import { NextApiResponse, NextApiRequest } from "next"
import { Client } from "pg"

const client = new Client({ connectionString: process.env.DATABASE_URL })
client.connect()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await client.query(
    'SELECT "public"."Product"."id", "public"."Product"."handle", "public"."Product"."name", "public"."Product"."description", "public"."Product"."price" FROM "public"."Product" WHERE 1=1 ORDER BY "public"."Product"."id" ASC LIMIT 5 OFFSET 0'
  )
  const products = data.rows
  res.status(200).json(products)
}
