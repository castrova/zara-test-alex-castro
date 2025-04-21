import styled from 'styled-components'
import Link from 'next/link'

export const Nav = styled.nav`
  padding: 10px 20px;
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  align-items: center;
  color: var(--primary-color);
`

export const NavLink = styled(Link)`
  color: var(--primary-color);
  text-decoration: none;
  font-size: 18px;
`

export const CartIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const CartCount = styled.span`
  color: var(--primary-color);
  font-size: 12px;
`
