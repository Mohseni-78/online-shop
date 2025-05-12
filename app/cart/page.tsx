'use client';

import { useCartStore } from '@/core/stores/cartStore';
import Image from 'next/image';

export default function CartPage() {
  const { items, removeFromCart } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0)
    return <p className="text-center mt-10 text-gray-600">سبد خرید شما خالی است 🛒</p>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">🛒 سبد خرید شما</h1>

      <ul className="space-y-6">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-6 border-b pb-4">
            <Image src={item.image} alt={item.title} width={80} height={80} className="rounded" />
            <div className="flex-1">
              <h2 className="font-semibold text-lg">{item.title}</h2>
              <p className="text-sm text-gray-600">تعداد: {item.quantity}</p>
              <p className="font-bold text-blue-700">
                {(item.price * item.quantity).toLocaleString()} تومان
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 hover:text-red-800 text-sm"
            >
              حذف ❌
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-8 text-right font-bold text-xl">
        جمع کل: {total.toLocaleString()} تومان
      </div>
    </div>
  );
}
