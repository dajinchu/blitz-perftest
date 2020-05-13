import { NextApiResponse, NextApiRequest } from "next";
import db from 'db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const products = await db.product.findMany({ first: 4 })
    res.status(200).json(products)
  } catch (e) {
    console.error(e)
    res.status(500).send('')
  }
}
