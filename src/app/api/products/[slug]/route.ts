import { z }from 'zod'
import data from '../data.json'

export async function GET(
 _: Request,
 { params }: { params: { slug: string} }, 
) {
  await new Promise((resolve) => setTimeout(resolve, 3000)) // demora de 3s para ver loading

  const slug = z.string().parse(params.slug)
  console.log("🚀 ~ GET ~ params.slug:", params.slug)

  const product = data.products.find((product) => product.slug === slug)

  if(!product) {
    return Response.json({ message: 'Product not found'}, { status: 400})
  }

  return Response.json(product)
}