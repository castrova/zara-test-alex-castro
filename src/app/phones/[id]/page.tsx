'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { fetchPhoneById } from '@/lib/api'
import { Product, ColorOption, StorageOption } from '@/types/phone'
import { useCart } from '@/contexts/CartContext'
import ProductCard from '@/components/ProductCard/ProductCard'
import { removeDuplicates } from '@/utils/unique'
import { useRouter } from 'next/navigation'
import {
  AddToCartButton,
  ColorButton,
  ColorRepresentation,
  Container,
  DetailsContainer,
  Message,
  OptionButtons,
  OptionLabel,
  OptionsContainer,
  ProductBrand,
  ProductContainer,
  ProductImage,
  ProductPrice,
  ProductTitle,
  SimilarGrid,
  SimilarSection,
  SimilarTitle,
  SpecItem,
  SpecsList,
  SpecsSection,
  SpecsTitle,
  SpecText,
  StorageButton,
} from './PhoneStyles'
import { CartItem } from '@/types/cart'
import { v4 as uuidv4 } from 'uuid'

export default function PhoneDetailPage() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState<ColorOption | null>(null)
  const [selectedStorage, setSelectedStorage] = useState<StorageOption | null>(null)
  const router = useRouter()

  // Cargar los datos del producto
  useEffect(() => {
    const loadPhone = async () => {
      try {
        setLoading(true)
        const data = await fetchPhoneById(id as string)
        setProduct(data)
        // Seleccionar el primer color y almacenamiento por defecto
        if (data.colorOptions.length > 0) setSelectedColor(data.colorOptions[0])
        if (data.storageOptions?.length === 1) setSelectedStorage(data.storageOptions[0])
      } catch (err) {
        setError('Error al cargar el teléfono ' + err)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      loadPhone()
    }
  }, [id])

  // Función para añadir al carrito
  const handleAddToCart = () => {
    if (!product || !selectedColor || !selectedStorage) return

    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      brand: product.brand,
      basePrice: product.basePrice,
      selectedColor: selectedColor.name,
      selectedStorage: selectedStorage.capacity,
      imageUrl: selectedColor.imageUrl || '',
      finalPrice: selectedStorage?.price || product.basePrice,
      cartItemId: uuidv4(),
    }
    addToCart(cartItem)

    // Navegar al carrito
    router.push('/cart')
  }

  if (loading) return <Message>Loading...</Message>
  if (error) return <Message>{error}</Message>
  if (!product) return <Message>No se encontró el teléfono</Message>

  return (
    <Container>
      {/* Imagen y detalles */}
      <ProductContainer>
        <ProductImage
          src={selectedColor?.imageUrl || ''}
          alt={`${product.name} smartphone by ${product.brand}`}
        />
        <DetailsContainer>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductBrand>{product.brand}</ProductBrand>
          <ProductPrice>
            {!selectedStorage && 'From '}
            {selectedStorage?.price || product.basePrice || 0} EUR
          </ProductPrice>

          {/* Opciones de color y almacenamiento */}
          <OptionsContainer>
            {/* Almacenamiento */}
            <div>
              <OptionLabel>STORAGE ¿HOW MUCH SPACE DO YOU NEED?</OptionLabel>
              <OptionButtons hasGap={false}>
                {product.storageOptions.map((storage) => (
                  <StorageButton
                    key={storage.capacity}
                    selected={selectedStorage?.capacity === storage.capacity}
                    onClick={() => setSelectedStorage(storage)}
                  >
                    {storage.capacity}
                  </StorageButton>
                ))}
              </OptionButtons>
            </div>
            {/* Colores */}
            <div>
              <OptionLabel>Color. PICK YOUR FAVOURITE.</OptionLabel>
              <OptionButtons hasGap>
                {product.colorOptions.map((color) => (
                  <ColorButton
                    key={color.name}
                    selected={selectedColor?.hexCode === color.hexCode}
                    onClick={() => setSelectedColor(color)}
                  >
                    <ColorRepresentation color={color.hexCode} />
                  </ColorButton>
                ))}
              </OptionButtons>
              <div>{selectedColor?.name}</div>
            </div>
          </OptionsContainer>

          {/* Botón "Add to cart" */}
          <AddToCartButton onClick={handleAddToCart} disabled={!selectedStorage}>
            AÑADIR
          </AddToCartButton>
        </DetailsContainer>
      </ProductContainer>

      {/* Especificaciones */}
      <SpecsSection>
        <SpecsTitle>SPECIFICATIONS</SpecsTitle>
        {Object.keys(product.specs).length > 0 && (
          <SpecsList>
            {Object.entries(product.specs).map(([key, value]) => (
              <SpecItem key={key}>
                <SpecText>{key.toUpperCase()}</SpecText> <SpecText>{value}</SpecText>
              </SpecItem>
            ))}
            <SpecItem />
          </SpecsList>
        )}
      </SpecsSection>

      {/* Productos similares */}
      {removeDuplicates(product.similarProducts).length > 0 && (
        <SimilarSection>
          <SimilarTitle>Productos similares</SimilarTitle>
          <SimilarGrid>
            {removeDuplicates(product.similarProducts).map((similarProduct) => (
              <ProductCard key={similarProduct.id} product={similarProduct} />
            ))}
          </SimilarGrid>
        </SimilarSection>
      )}
    </Container>
  )
}
