import styled from 'styled-components'

// Contenedor principal
export const Container = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`

// Contenedor del producto (imagen + detalles)
export const ProductContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`

// Imagen del producto
export const ProductImage = styled.img`
  width: 50%;
  max-width: 500px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`

// Contenedor de los detalles
export const DetailsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

// Título del producto
export const ProductTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  color: var(--primary-color);
  font-family: var(--font-family);
`

// Marca del producto
export const ProductBrand = styled.h1`
  font-size: 20px;
  margin: 0;
  color: var(--secondary-color);
  font-family: var(--font-family);
`

// Precio del producto
export const ProductPrice = styled.p`
  font-size: 24px;
  color: var(--primary-color);
  margin: 0;
  font-family: var(--font-family);
`

// Contenedor de opciones (color y almacenamiento)
export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0;
`

// Etiqueta de las opciones
export const OptionLabel = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
  color: var(--primary-color);
  font-family: var(--font-family);
`

// Contenedor de los botones de opciones
export const OptionButtons = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'hasGap',
})<{ hasGap: boolean }>`
  display: flex;
  margin-bottom: 15px;
  gap: ${(props) => (props.hasGap ? '10px' : '0px')};
  flex-wrap: wrap;
`

// Botón de color (círculo)
export const ColorButton = styled.button<{ selected: boolean }>`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color};
  border: ${(props) => (props.selected ? '1px solid #000' : '1px solid #e0e0e0')};
  padding: 2px;
  cursor: pointer;
  outline: none;

  &:hover {
    border: 1px solid #000;
  }
`

// Pinta el color
export const ColorRepresentation = styled.div<{ color: string }>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
`

// Botón de almacenamiento
export const StorageButton = styled.button<{ selected: boolean }>`
  width: 100px;
  height: 70px;
  font-size: 14px;
  border: ${(props) => (props.selected ? '2px solid #000' : '1px solid #e0e0e0')};
  background-color: ${(props) => (props.selected ? '#f5f5f5' : 'transparent')};
  cursor: pointer;
  font-family: var(--font-family);

  &:hover {
    background-color: #f5f5f5;
  }
`

// Botón "Add to cart"
export const AddToCartButton = styled.button<{ disabled?: boolean }>`
  padding: 15px;
  font-size: 16px;
  color: var(--secondary-color);
  background-color: ${(props) => (props.disabled ? '#aaa' : '#000')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'cursor' : 'pointer')};
  border: none;
  border-radius: 2px;
  font-family: var(--font-family);
  transition:
    background-color 0.3s ease,
    opacity 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#aaa' : '#333')};
  }
`

// Sección de especificaciones
export const SpecsSection = styled.div`
  margin: 40px 0;
`

export const SpecsTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--primary-color);
  font-family: var(--font-family);
`

export const SpecsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
`

export const SpecItem = styled.li`
  width: 100%;
  padding: 10px 0px;
  border-top: 1px solid #666;
  font-size: 16px;
  display: flex;
  align-items: center;
  font-family: var(--font-family);

  span {
    font-weight: 600;
    color: var(--primary-color);
  }
`
export const SpecText = styled.p`
  color: #333;
  width: 50%;
`

// Sección de productos similares
export const SimilarSection = styled.div`
  margin-top: 40px;
`

export const SimilarTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--primary-color);
  font-family: var(--font-family);
`

export const SimilarGrid = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  padding: 1px 1px 10px 1px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  & > * {
    flex: 0 0 auto;
    width: 300px;
  }

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #aaa;
  }

  @media (max-width: 768px) {
    & > * {
      width: 250px;
    }
  }

  @media (max-width: 480px) {
    & > * {
      width: 200px;
    }
  }
`

// Mensaje de carga o error
export const Message = styled.p`
  text-align: center;
  font-size: 18px;
  color: var(--terciary-color);
  margin: 40px 0;
  font-family: var(--font-family);
`
