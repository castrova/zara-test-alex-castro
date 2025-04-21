'use client'

import { useCart } from '@/contexts/CartContext'
import { useRouter } from 'next/navigation'
import {
  BottomSection,
  CartItemContainer,
  CartList,
  Container,
  ContinueShopping,
  ItemDetails,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemOptions,
  ItemPrice,
  PayButton,
  PaymentSection,
  RemoveButton,
  Title,
  TotalText,
} from './CartStyles'

export default function CartPage() {
  const { cart, removeFromCart } = useCart()
  const router = useRouter()

  // Calcular el precio total
  const totalPrice = cart.reduce((total, item) => total + item.finalPrice, 0)

  return (
    <Container>
      <Title>CART ({cart.length})</Title>
      <>
        <CartList>
          {cart.map((item) => (
            <CartItemContainer key={item.cartItemId}>
              <ItemImage src={item.imageUrl} alt={item.name} />
              <ItemDetails>
                <ItemInfo>
                  <ItemName>{item.name}</ItemName>
                  <ItemOptions>
                    {item.selectedStorage} | {item.selectedColor}
                  </ItemOptions>
                  <ItemPrice>{item.finalPrice} EUR</ItemPrice>
                </ItemInfo>
                <RemoveButton onClick={() => removeFromCart(item.cartItemId)}>
                  Eliminar
                </RemoveButton>
              </ItemDetails>
            </CartItemContainer>
          ))}
        </CartList>
        <BottomSection>
          <ContinueShopping onClick={() => router.push('/')}>CONTINUE SHOPPING</ContinueShopping>
          {cart.length > 0 && (
            <PaymentSection>
              <TotalText>TOTAL {totalPrice} EUR</TotalText>
              <PayButton>PAY</PayButton>
            </PaymentSection>
          )}
        </BottomSection>
      </>
    </Container>
  )
}
