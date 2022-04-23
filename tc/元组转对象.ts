// const tuple = ['tuple', 2] // tuple: (string | number)[]
const tuple = ['tuple', 2] as const // tuple: readonly ["tuple", 2]


type tupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K
}

type res = tupleToObject<typeof tuple>



