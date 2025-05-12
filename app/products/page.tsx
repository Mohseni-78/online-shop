'use client';

import { useProducts } from '@/features/products/hooks/useProducts';
import { ProductCard } from '@/shared/components/ui/ProductCard';

export default function ProductsPage() {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطا در دریافت اطلاعات محصولات</p>;

  return (
    <>
      <div className="grid grid-cols-2 gap-4 p-4">
        {products?.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </>
  );
}
