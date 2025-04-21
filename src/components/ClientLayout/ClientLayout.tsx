'use client'

import { CartProvider } from '@/contexts/CartContext'
import styled from 'styled-components'
import Navbar from '@/components/Navbar/Navbar'

const Main = styled.main``

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <CartProvider>
      <Navbar />
      <Main>{children}</Main>
    </CartProvider>
  )
}
