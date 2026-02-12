import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import { currencyBr } from "@/data/utils";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface SearchParams {
  searchParams: {
    q: string
  }
}

async function searchProducts(query: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`, {
    // next: {
    //   revalidate: 60 * 60 // 1 hour - 3600
    // }
  })

  const products = await response.json()

  return products
}

export default async function Search({ searchParams }: SearchParams) {
  const { q: query } = await searchParams

  //direciono para home se por algum motivo essa página for acessada sem query
  if (!query) {
    redirect('/')
  }

  const products = await searchProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {
          products.map((product) => {
            return (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="group relative rounded-b-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
              >
                <Image
                  src={product.image}
                  className="group-hover:scale-105 transition-transform duration-500"
                  width={480}
                  height={480}
                  quality={100}
                  alt="moletom branco"
                />

                <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w[280] rounded-full border-2 border-xinc-500 bg-black/60 p-1 pl-5">
                  <span className="text-sm truncate">{product.title}</span>
                  <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                    {currencyBr(product.price)}
                  </span>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}