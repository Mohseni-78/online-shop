'use client';

import { useCartStore } from '@/core/stores/cartStore';
import Link from 'next/link';
import { ShoppingCartIcon } from 'lucide-react';

export function CartIcon() {
  const items = useCartStore((state) => state.items);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link href="/cart" className="relative">
      <ShoppingCartIcon className="w-6 h-6 text-gray-800" />
      {totalCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {totalCount}
        </span>
      )}
    </Link>
  );
}
