import styled from 'styled-components'

// Contenedor principal
export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

// Encabezado fijo (navbar y SearchBar)
export const Header = styled.header`
  position: sticky;
  top: 0;
  background-color: var(--secondary-color);
  z-index: 1000;
  padding: 10px 20px;
`

// Contenedor de la cuadrícula con desplazamiento
export const GridContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0px 20px 20px 20px;
`

// Cuadrícula de productos
export const Grid = styled.div`
  display: grid;
  padding: 1px 0px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
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
