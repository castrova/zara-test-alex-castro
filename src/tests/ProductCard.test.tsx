import { render, screen } from '@testing-library/react'
import ProductCard from '@/components/ProductCard/ProductCard'
import { ProductListItem } from '@/types/phone'

describe('ProductCard', () => {
  const mockProduct: ProductListItem = {
    id: '1',
    name: 'iPhone 14',
    brand: 'Apple',
    basePrice: 799,
    imageUrl: '/images/iphone14.jpg',
  }

  it('renderiza correctamente los datos del producto', () => {
    render(<ProductCard product={mockProduct} />)

    expect(screen.getByText('iPhone 14')).toBeInTheDocument()
    expect(screen.getByText('Apple')).toBeInTheDocument()
    expect(screen.getByText('799 EUR')).toBeInTheDocument()
    expect(screen.getByAltText('iPhone 14')).toHaveAttribute('src', '/images/iphone14.jpg')
  })

  it('contiene un enlace a la página de detalle del producto', () => {
    render(<ProductCard product={mockProduct} />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/phones/1')
  })
})
