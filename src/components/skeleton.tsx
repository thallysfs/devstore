import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge"; // para mergear o classname do componente que vai chamar o skeleteon com o className presente no skeleteon.
//se não usar essfunção, o className que vier do componente sobrescreve o className desse componente

export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={twMerge("bg-zinc-50/10 animate-pulse rounded-md", className)} {...props}>

    </div>
  )
}