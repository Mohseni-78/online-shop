'use client';

import { Product } from '@/features/products/types/product';
import Image from 'next/image';

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="p-4 border rounded shadow hover:shadow-lg transition-all">
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="font-semibold mt-2 text-sm">{product.title}</h2>
      <p className="text-gray-600">{product.price.toLocaleString()} تومان</p>
    </div>
  );
};
