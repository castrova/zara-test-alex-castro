import styled from 'styled-components'

// Contenedor del buscador
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
  width: 100%;
`

// Contenedor del input con el ícono de lupa
export const InputWrapper = styled.div`
  width: 100%;
`

// Estilo del input
export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 40px 12px 0px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  box-sizing: border-box;
  outline: none;
  font-family: var(--font-family);

  &:focus {
    border-color: var(--primary-color);
  }
`

// Estilo del texto de resultados
export const ResultsCount = styled.span`
  font-size: 14px;
  color: var(--terciary-color);
  white-space: nowrap;
  font-family: var(--font-family);
`
