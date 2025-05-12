import Link from 'next/link';
import { CartIcon } from './CartIcon';

export function Header() {
  return (
    <header className="w-full px-8 py-4 flex justify-between items-center shadow-md">
      <Link href="/" className="text-xl font-bold">
        دیجی‌کالا 📦
      </Link>

      <div className="flex items-center gap-4">
        {/* آیتم‌های بعدی مثل ورود و جستجو رو بعدا اضافه می‌کنیم */}
        <CartIcon />
      </div>
    </header>
  );
}
