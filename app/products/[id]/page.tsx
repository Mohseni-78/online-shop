// src/app/products/[id]/page.tsx
import { getProductById } from '@/features/products/api/getProductById';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { use } from 'react';
import { AddToCartButton } from '@/features/cart/components/AddToCartButton';

type Props = {
  params: Promise<{ id: string }>;
};

export default function ProductDetailPage(props: Props) {
  const { id } = use(props.params);
  const product = use(getProductById(id));

  if (!product) return notFound();

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="rounded mb-6"
      />
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-700 mb-4">{product.category}</p>
      <p className="text-lg font-semibold">{product.price.toLocaleString()} تومان</p>
      <p className="text-yellow-500 mb-4">امتیاز: {product.rating} ⭐</p>

      {/* 👇 این client component جدا شده */}
      <AddToCartButton
        product={{
          id: product.id,
          image: product.image,
          title: product.title,
          price: product.price,
        }}
      />
    </div>
  );
}
