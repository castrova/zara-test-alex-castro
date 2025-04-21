import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from '@/components/SearchBar/SearchBar'

describe('SearchBar', () => {
  const mockSetSearchQuery = jest.fn()

  const defaultProps = {
    searchQuery: '',
    setSearchQuery: mockSetSearchQuery,
    resultsCount: 5,
    loading: false,
  }

  beforeEach(() => {
    mockSetSearchQuery.mockClear()
  })

  it('renderiza correctamente el input y el conteo de resultados', () => {
    render(<SearchBar {...defaultProps} />)

    const input = screen.getByPlaceholderText('Search for a smartphone...')
    const resultsText = screen.getByText('5 results')

    expect(input).toBeInTheDocument()
    expect(resultsText).toBeInTheDocument()
  })

  it('maneja cambios en el input y llama a setSearchQuery', () => {
    render(<SearchBar {...defaultProps} />)

    const input = screen.getByPlaceholderText('Search for a smartphone...')
    fireEvent.change(input, { target: { value: 'iPhone' } })

    expect(mockSetSearchQuery).toHaveBeenCalledWith('iPhone')
  })

  it('muestra el conteo de resultados correctamente cuando cambia', () => {
    render(<SearchBar {...defaultProps} resultsCount={10} />)

    const resultsText = screen.getByText('10 results')
    expect(resultsText).toBeInTheDocument()
  })

  it('no muestra el conteo de resultados cuando loading es true', () => {
    render(<SearchBar {...defaultProps} loading={true} />)

    const resultsText = screen.queryByText('5 results')
    expect(resultsText).not.toBeInTheDocument()
  })
})
