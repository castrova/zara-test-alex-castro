// Tipo para un producto en la lista (GET /products)
export interface ProductListItem {
  id: string
  brand: string
  name: string
  basePrice: number
  imageUrl: string
}

// Tipo para las opciones de color
export interface ColorOption {
  name: string
  hexCode: string
  imageUrl: string
}

// Tipo para las opciones de almacenamiento
export interface StorageOption {
  capacity: string
  price: number
}

// Tipo para un producto específico (GET /products/{id})
export interface Product {
  id: string
  brand: string
  name: string
  description: string
  basePrice: number
  rating: number
  specs: Record<string, string>
  colorOptions: ColorOption[]
  storageOptions: StorageOption[]
  similarProducts: ProductListItem[]
}
