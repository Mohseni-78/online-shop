'use client';

import { useCartStore } from '@/core/stores/cartStore';
import { CartItem } from '@/features/cart/types/cartItem';

type Props = {
  product: Omit<CartItem, 'quantity'>;
};

export function AddToCartButton({ product }: Props) {
  const { addToCart } = useCartStore();

  const handleClick = () => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
    >
      افزودن به سبد خرید 🛒
    </button>
  );
}
