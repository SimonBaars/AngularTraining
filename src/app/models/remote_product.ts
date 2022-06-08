export interface RemoteProduct {
  id: string
  name: string
  price: number
  image: string
}

export interface ProductsJson {
  products: RemoteProduct[]
}
