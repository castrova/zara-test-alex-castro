import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Home from '@/app/page'
import { fetchPhones } from '@/lib/api'
import { ProductListItem } from '@/types/phone'

// Mock de fetchPhones
jest.mock('@/lib/api', () => ({
  fetchPhones: jest.fn(),
}))

describe('Home', () => {
  const mockPhones: ProductListItem[] = [
    {
      id: '1',
      name: 'iPhone 14',
      brand: 'Apple',
      basePrice: 799,
      imageUrl: '/images/iphone14.jpg',
    },
    {
      id: '2',
      name: 'Galaxy S23',
      brand: 'Samsung',
      basePrice: 699,
      imageUrl: '/images/galaxys23.jpg',
    },
  ]

  beforeEach(() => {
    ;(fetchPhones as jest.Mock).mockClear()
  })

  it('muestra el estado de carga inicialmente', () => {
    ;(fetchPhones as jest.Mock).mockReturnValue(new Promise(() => {})) // Simula carga infinita
    render(<Home />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('muestra un error cuando la API falla', async () => {
    ;(fetchPhones as jest.Mock).mockRejectedValue(new Error('API Error'))
    render(<Home />)

    await waitFor(() => {
      expect(screen.getByText(/Error al cargar los teléfonos/)).toBeInTheDocument()
    })
  })

  it('renderiza los teléfonos cuando la API tiene éxito', async () => {
    ;(fetchPhones as jest.Mock).mockResolvedValue(mockPhones)
    render(<Home />)

    await waitFor(() => {
      expect(screen.getByText('iPhone 14')).toBeInTheDocument()
      expect(screen.getByText('Galaxy S23')).toBeInTheDocument()
    })
  })

  it('filtra teléfonos cuando se escribe en el SearchBar', async () => {
    ;(fetchPhones as jest.Mock).mockImplementation((query) =>
      Promise.resolve(
        query
          ? mockPhones.filter((phone) => phone.name.toLowerCase().includes(query.toLowerCase()))
          : mockPhones,
      ),
    )
    render(<Home />)

    const input = screen.getByPlaceholderText('Search for a smartphone...')
    fireEvent.change(input, { target: { value: 'iPhone' } })

    await waitFor(() => {
      expect(screen.getByText('iPhone 14')).toBeInTheDocument()
      expect(screen.queryByText('Galaxy S23')).not.toBeInTheDocument()
    })
  })
})
