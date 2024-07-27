import { NextRequest, NextResponse } from 'next/server'
import { getRequestContext } from '@cloudflare/next-on-pages'
import { Book } from '@models/Book/Book'
import { Title } from '@/Domain/models/Book/Title';
import { Author } from '@/Domain/models/Book/Author';
import { Price } from '@/Domain/models/Book/Price';
import { PublishDate } from '@/Domain/models/Book/PublishDate';
import { Tag } from '@/Domain/models/Book/Tag';
import { PrismaBookRepository } from '@/infrastructures/PrismaBookRepository';
import { IBookRepository } from '@/Domain/models/Book/IBookRepository';

interface BookRequestBody {
  title: Title;
  author: Author;
  price: Price;
  publishDate?: PublishDate;
  tags?: Tag[];
}

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  let responseText = 'Hello Books'
  console.log(req)

  return new Response(responseText)
}

export async function POST(req: NextRequest) {
  try {
    const body: BookRequestBody = await req.json();

    const { title, author, price, publishDate, tags } = body;

    // Book の作成
    // const book = await prisma.book.create({
    //   data: {
    //     title,
    //     author,
    //     price: parseInt(price, 10),
    //     publishDate: publishDate ? new Date(publishDate) : null,
    //     tags: {
    //       create: tags?.map((tag: string) => ({ name: tag })) || [],
    //     },
    //   },
    // });

    //const book = new Book(title, author, price, publishDate, tags)
    const bookRepository = new PrismaBookRepository();
    Book.registerBook(bookRepository, title, author, price, publishDate, tags)
    return NextResponse.json(body);
  } catch (error) {
    console.error('Error creating book:', error);
    return NextResponse.error();
  }
}