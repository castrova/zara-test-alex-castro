import { ProductListItem, Product } from '@/types/phone'

// Obtener la URL y la clave de la API desde variables de entorno
const API_URL = 'https://prueba-tecnica-api-tienda-moviles.onrender.com'
const API_KEY = '87909682e6cd74208f41a6ef39fe4191'

// Configuración común para todas las solicitudes
const defaultHeaders = {
  'x-api-key': API_KEY,
}

// Obtener los primeros 20 teléfonos
export async function fetchPhones(query: string = ''): Promise<ProductListItem[]> {
  const url = query
    ? `${API_URL}/products?search=${encodeURIComponent(query)}`
    : `${API_URL}/products`

  const response = await fetch(url, {
    headers: defaultHeaders,
  })

  if (!response.ok) {
    throw new Error(`Error al obtener los teléfonos: ${response.statusText}`)
  }

  const data = await response.json()
  return data.slice(0, 20) // Limitar a los primeros 20
}

// Obtener el detalle de un teléfono
export async function fetchPhoneById(id: string): Promise<Product> {
  const response = await fetch(`${API_URL}/products/${id}`, {
    headers: defaultHeaders,
  })

  if (!response.ok) {
    throw new Error(`Error al obtener el teléfono con ID ${id}: ${response.statusText}`)
  }

  return response.json()
}
