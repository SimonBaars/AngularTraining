export interface Product {
  product_id: string
  name: string
  price: number
  image: string
}

export interface ProductsJson {
  products: Product[]
}

export interface ProductDetails {
  product_id: string
  name: string
  price: number
  image: string
  description: string
}

export interface CartProducts {
  [key: string]: number
}
