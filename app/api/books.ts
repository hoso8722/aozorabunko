import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return new Response('Hello books')
  }
  if (req.method === 'POST') {
    const { title, author, price, publishDate, tags } = req.body;

    try {
      const book = await prisma.book.create({
        data: {
          title,
          author,
          price: parseInt(price),
          publishDate,
          tags: {

          },
        },
      });

      res.status(201).json(book);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create book' });
    }
  } else {
    res.status(405).end();
  }
}
