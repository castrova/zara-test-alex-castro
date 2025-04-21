'use client'

import { useState, useEffect } from 'react'
import { fetchPhones } from '@/lib/api'
import { ProductListItem } from '@/types/phone'
import SearchBar from '@/components/SearchBar/SearchBar'
import ProductCard from '@/components/ProductCard/ProductCard'
import { removeDuplicates } from '@/utils/unique'
import { Container, Grid, GridContainer, Header, Message } from './HomeStyles'

export default function Home() {
  const [phones, setPhones] = useState<ProductListItem[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadPhones = async () => {
      try {
        setLoading(true)
        const data = await fetchPhones(searchQuery)
        const uniquePhones = removeDuplicates(data)
        setPhones(uniquePhones)
      } catch (err) {
        setError('Error al cargar los teléfonos' + err)
      } finally {
        setLoading(false)
      }
    }

    loadPhones()
  }, [searchQuery])

  if (error) return <Message>{error}</Message>

  return (
    <Container>
      <Header>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          resultsCount={phones.length}
          loading={loading}
        />
      </Header>
      <GridContainer>
        <div aria-live="polite">
          {loading ? (
            <Message>Loading...</Message>
          ) : phones.length === 0 ? (
            <Message>No phones matched the search query</Message>
          ) : (
            <Grid role="grid" aria-label="Smartphone list">
              {phones.map((phone) => (
                <ProductCard key={phone.id} product={phone} />
              ))}
            </Grid>
          )}
        </div>
      </GridContainer>
    </Container>
  )
}
