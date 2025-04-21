# 📱 Zara Challenge

Aplicación web desarrollada para la prueba técnica "Zara Challenge". Permite visualizar, buscar y gestionar un catálogo de teléfonos móviles, incluyendo un carrito de compras persistente.

## 🚀 Instrucciones

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm

### Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/castrova/zara-test-alex-castro.git
   cd zara-test-alex-castro
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Ejecutar en modo desarrollo:

   ```bash
   npm run dev
   ```

4. Abrir el navegador y navegar a `http://localhost:3000`

5. Para modo producción:

   ```bash
   npm run build
   npm run start
   ```

## 🧪 Pruebas

Ejecutar las pruebas unitarias:

```bash
npm run test
```

## 📂 Estructura

- `src/app/`: Páginas principales.
  - `page.tsx`: Página principal.
  - `HomeStyles.ts`: Estilo de la página principal.
  - `phones/`: Páginas del detalle del teléfono
    - `[id]/page.tsx`: Detalle del teléfono.
    - `PhoneStyles.ts`: Estilos del detalle.
  - `cart/`: Páginas del carrito de compras.
    - `page.tsx`: Carrito de compras.
    - `CartStyles.ts`: Estilos del carrito.
- `src/components/`: Componentes.
  - `ClientLayout/`: Layout para el cliente.
    - `ClientLayout.tsx`: Renderiza la página principal.
  - `NavBar/`: Barra de navegación.
    - `NavBar.tsx`: Componente para la barra de navegación.
    - `NavBarStyles.ts`: Estilos de la barra de navegación.
  - `ProductCard/`: Tarjetas de productos.
    - `ProductCard.tsx`: Componente para la tarjeta del producto.
    - `ProductCardStyles.ts`: Estilos de la tarjeta del producto.
  - `SearchBar/`: Barra de búsqueda.
    - `SearchBar.tsx`: Componente para la barra de búsqueda.
    - `SearchBar.ts`: Estilos de la barra de búsqueda.
- `src/contexts/`: Gestión del estado.
  - `CartContext.tsx`: Contexto del carrito.
- `src/lib/`: Utilidades de API.
  - `api.ts`: Funciones de la API.
- `src/styles/`: Estilos globales.
  - `globals.css`: Variables CSS.
- `src/tests/`: Pruebas unitarias.
  - `CartPage.test.tsx`: Pruebas del carrito.
  - `Home.test.tsx`: Pruebas del listado.
  - `ProductCard.test.tsx`: Pruebas de la tarjeta de producto.
  - `SearchBar.test.tsx`: Pruebas de la barra de búsqueda.
- `src/types/`: Definiciones de tipos.
  - `cart.ts`: Tipos del carrito.
  - `phones.ts`: Tipos de los teléfonos.
- `src/utils/`: Funciones auxiliares.
  - `unique.ts`: Función para filtrar teléfonos duplicados.

## 🔧 Tecnologías

- **Frontend**: Next.js (React >= 17) con Server Side Rendering (SSR).
- **Estilos**: Styled Components y variables CSS.
- **Gestión de Estado**: React Context API.
- **Testing**: Jest y React Testing Library.
- **API**: Llamadas REST autenticadas con x-api-key.
- **Accesibilidad**: Uso de ARIA y navegación por teclado.
- **Linters**: ESLint y Prettier para consistencia de código.

## 🔗 Enlaces
**Demo**: https://zara-test-alex-castro.vercel.app/

## 📧 Contacto
Para cualquier duda o feedback, no dudes en contactarme:
✉️ alex.castro.ver@gmail.com
