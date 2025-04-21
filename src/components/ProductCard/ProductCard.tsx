import Link from 'next/link'
import { ProductListItem } from '@/types/phone'
import {
  Card,
  CardBrand,
  CardImage,
  CardInfo,
  CardPrice,
  CardSecondaryInfo,
  CardTitle,
} from './ProductCardStyles'

interface ProductCardProps {
  product: ProductListItem
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/phones/${product.id}`}
      passHref
      aria-label={`View details for ${product.name} by ${product.brand}`}
      style={{ textDecoration: 'none' }}
    >
      <Card>
        <CardImage src={product.imageUrl} alt={product.name} />
        <CardInfo>
          <CardBrand>{product.brand}</CardBrand>
          <CardSecondaryInfo>
            <CardTitle>{product.name}</CardTitle>
            <CardPrice>{product.basePrice} EUR</CardPrice>
          </CardSecondaryInfo>
        </CardInfo>
      </Card>
    </Link>
  )
}
