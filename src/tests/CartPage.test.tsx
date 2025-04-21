'use client'

import { render, screen, fireEvent } from '@testing-library/react'
import CartPage from '@/app/cart/page'
import { CartContext } from '@/contexts/CartContext'
import { CartItem } from '@/types/cart'

// Mock de next/navigation para useRouter
const mockPush = jest.fn()
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}))

// Mock del CartContext
const mockCart: CartItem[] = [
  {
    id: '1',
    cartItemId: 'randomId',
    name: 'iPhone 14',
    brand: 'Apple',
    basePrice: 799,
    selectedColor: 'Midnight',
    selectedStorage: '128GB',
    imageUrl: '/images/iphone14.jpg',
    finalPrice: 799,
  },
  {
    id: '2',
    name: 'Galaxy S23',
    cartItemId: 'randomId2',
    brand: 'Samsung',
    basePrice: 699,
    selectedColor: 'Black',
    selectedStorage: '256GB',
    imageUrl: '/images/galaxys23.jpg',
    finalPrice: 749,
  },
]

const mockRemoveFromCart = jest.fn()
const mockClearCart = jest.fn()

const renderWithCartContext = (cart: CartItem[] = []) => {
  return render(
    <CartContext.Provider
      value={{
        cart,
        addToCart: jest.fn(),
        removeFromCart: mockRemoveFromCart,
        clearCart: mockClearCart,
      }}
    >
      <CartPage />
    </CartContext.Provider>,
  )
}

describe('CartPage', () => {
  beforeEach(() => {
    mockRemoveFromCart.mockClear()
    mockClearCart.mockClear()
    mockPush.mockClear()
  })

  it('renderiza los ítems del carrito correctamente', () => {
    renderWithCartContext(mockCart)

    expect(screen.getByText('iPhone 14')).toBeInTheDocument()
    expect(screen.getByText('128GB | Midnight')).toBeInTheDocument()
    expect(screen.getByText('799 EUR')).toBeInTheDocument()

    expect(screen.getByText('Galaxy S23')).toBeInTheDocument()
    expect(screen.getByText('256GB | Black')).toBeInTheDocument()
    expect(screen.getByText('749 EUR')).toBeInTheDocument()
  })

  it('calcula y muestra el precio total correctamente', () => {
    renderWithCartContext(mockCart)
    expect(screen.getByText('TOTAL 1548 EUR')).toBeInTheDocument()
  })

  it('llama a removeFromCart cuando se elimina un ítem', () => {
    renderWithCartContext(mockCart)

    const removeButtons = screen.getAllByText('Eliminar')
    fireEvent.click(removeButtons[0])

    expect(mockRemoveFromCart).toHaveBeenCalledWith('randomId')
  })

  it('navega a la página principal cuando se hace clic en CONTINUE SHOPPING', () => {
    renderWithCartContext(mockCart)

    const continueShoppingButton = screen.getByText('CONTINUE SHOPPING')
    fireEvent.click(continueShoppingButton)

    expect(mockPush).toHaveBeenCalledWith('/')
  })
})
