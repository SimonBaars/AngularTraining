export interface RemoteProduct {
  product_id: string
  name: string
  price: number
  image: string
}

export interface ProductsJson {
  products: RemoteProduct[]
}
