import styled from 'styled-components'

// Contenedor principal
export const Container = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 120px;
`

// Título de la página
export const Title = styled.h1`
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 30px;
  color: var(--primary-color);
  font-family: var(--font-family);
`

// Lista de ítems del carrito
export const CartList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

// Ítem del carrito
export const CartItemContainer = styled.li`
  display: flex;
  gap: 30px;
  margin-bottom: 40px;

  @media (max-width: 472px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`

// Imagen del ítem
export const ItemImage = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
`

// Contenedor de detalles e eliminar
export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 6px;
  flex: 1;
`

// Detalles del ítem
export const ItemInfo = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`

// Nombre del ítem
export const ItemName = styled.h2`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  color: var(--primary-color);
  font-family: var(--font-family);
  text-transform: uppercase;
`

// Opciones seleccionadas
export const ItemOptions = styled.p`
  font-size: 12px;
  color: var(--terciary-color);
  margin: 4px 0;
  font-family: var(--font-family);
`

// Precio del ítem
export const ItemPrice = styled.p`
  font-size: 14px;
  color: var(--primary-color);
  margin: 4px 0;
  font-family: var(--font-family);
`

// Botón de eliminar
export const RemoveButton = styled.button`
  font-size: 12px;
  color: red;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: var(--font-family);

  &:hover {
    text-decoration: underline;
  }
`

// Sección inferior del carrito
export const BottomSection = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--secondary-color);
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 472px) {
    flex-direction: column-reverse;
  }
`

// Botón para continuar comprando
export const ContinueShopping = styled.button`
  padding: 12px 24px;
  font-size: 12px;
  color: var(--primary-color);
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 2px;
  cursor: pointer;
  font-family: var(--font-family);

  &:hover {
    background-color: #f4f4f4;
  }
  @media (max-width: 472px) {
    width: 100%;
  }
`

// Sección del pago
export const PaymentSection = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  @media (max-width: 472px) {
    width: 100%;
    justify-content: space-between;
  }
`

// Texto del total
export const TotalText = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  font-family: var(--font-family);
`

// Botón de pago
export const PayButton = styled.button`
  padding: 15px 40px;
  font-size: 14px;
  color: var(--secondary-color);
  background-color: #181716;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-family: var(--font-family);

  &:hover {
    background-color: #333;
  }
`
