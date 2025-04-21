// Tipo para un ítem en el carrito
export interface CartItem {
  id: string
  name: string
  brand: string
  basePrice: number
  selectedStorage: string
  selectedColor: string
  imageUrl: string
  finalPrice: number
  cartItemId: string
}

// Definir la interfaz para el contexto
export interface CartContextType {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (cartItemId: string) => void
  clearCart: () => void
}
