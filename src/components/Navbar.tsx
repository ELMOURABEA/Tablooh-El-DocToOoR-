import { Frame, ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ cartCount, onOpenCart, onOpenAddProduct }: { cartCount: number, onOpenCart: () => void, onOpenAddProduct: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Frame className="h-8 w-8 text-black" />
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl tracking-tight text-gray-900 leading-none" dir="ltr" style={{ fontFamily: '"Playfair Display", serif' }}>TaBlooh</span>
              <span className="text-[10px] font-black tracking-[0.2em] text-amber-600 uppercase mt-1" dir="ltr" style={{ fontFamily: 'sans-serif' }}>EL-DocToOoR</span>
            </div>
          </div>

          <div className="hidden md:flex flex-1 justify-center gap-8 text-gray-700 font-medium tracking-wide">
            <a href="#home" className="hover:text-amber-600 transition">الرئيسية</a>
            <a href="#custom" className="hover:text-amber-600 transition">صمم لوحتك</a>
            <a href="#gallery" className="hover:text-amber-600 transition">التابلوهات</a>
            <button onClick={onOpenAddProduct} className="hover:text-amber-600 transition text-amber-700 font-bold cursor-pointer">رفع منتجاتي</button>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={onOpenCart} className="relative p-2 hover:bg-gray-100 rounded-full transition">
              <ShoppingCart className="h-6 w-6 text-gray-800" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-amber-600 rounded-full border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2 text-gray-700" onClick={() => setIsOpen(!isOpen)}>
               {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 flex flex-col gap-4 text-center font-medium">
            <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-amber-600 transition">الرئيسية</a>
            <a href="#custom" onClick={() => setIsOpen(false)} className="hover:text-amber-600 transition">صمم لوحتك</a>
            <a href="#gallery" onClick={() => setIsOpen(false)} className="hover:text-amber-600 transition">التابلوهات</a>
            <button onClick={() => { onOpenAddProduct(); setIsOpen(false); }} className="hover:text-amber-600 transition text-amber-700 font-bold cursor-pointer">رفع منتجاتي</button>
          </div>
        )}
      </div>
    </nav>
  );
}
