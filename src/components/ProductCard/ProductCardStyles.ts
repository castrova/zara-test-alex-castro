import styled from 'styled-components'

// Imagen del producto
export const CardImage = styled.img`
  height: 200px;
  width: 100%;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`

// Contenedor de la información
export const CardInfo = styled.div`
  padding: 15px;
  position: relative;
  z-index: 2;
`

// Nombre del producto
export const CardTitle = styled.p`
  font-size: 14px;
  margin: 0;
  color: var(--primary-color);
  transition: color 0.3s ease;
  font-family: var(--font-family);
`

// Marca del producto
export const CardBrand = styled.p`
  font-size: 14px;
  color: var(--terciary-color);
  margin: 5px 0;
  transition: color 0.3s ease;
  font-family: var(--font-family);
`

// Precio del producto
export const CardPrice = styled.p`
  font-size: 14px;
  color: var(--primary-color);
  margin: 0;
  transition: color 0.3s ease;
  font-family: var(--font-family);
`

// Contenedor del nombre y el precio
export const CardSecondaryInfo = styled.div`
  display: flex;
  justify-content: space-between;
`

// Contenedor de la tarjeta
export const Card = styled.div`
  position: relative;
  outline: 1px solid #000;
  background-color: white;
  overflow: hidden;
  padding: 10px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  /* Fondo animado */
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--primary-color);
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.5s cubic-bezier(0.2, 0, 0, 1);
    z-index: 0;
  }

  &:hover::before {
    transform: scaleY(1);
  }

  &:hover > * {
    ${CardImage}, ${CardTitle}, ${CardBrand}, ${CardPrice} {
      color: var(--secondary-color);
      transition: color 0.5s ease;
    }
  }
`
