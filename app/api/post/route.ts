import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  console.log("GET request", searchParams.get("name"))

  return new NextResponse(JSON.stringify({ message: "Hello World" }))
}

export async function POST(request: NextRequest) {
  const body: any = await request.json()

  console.log("POST request", body)
  const returnBody = `POSTで受け取った値：${body.name}`

  return new Response(JSON.stringify({ body: returnBody }))
}
