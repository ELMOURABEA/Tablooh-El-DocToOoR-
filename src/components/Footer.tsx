import { Frame } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-right rtl:text-right">
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2 text-white">
              <Frame className="h-8 w-8 text-amber-500" />
              <div className="flex flex-col">
                <span className="font-extrabold text-3xl tracking-tight text-white leading-none" dir="ltr" style={{ fontFamily: '"Playfair Display", serif' }}>TaBlooh</span>
                <span className="text-[10px] font-black tracking-[0.2em] text-amber-500 uppercase mt-1" dir="ltr" style={{ fontFamily: 'sans-serif' }}>EL-DocToOoR</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mt-2">
              متجر متخصص في التابلوهات المودرن والكلاسيكية. نصنع الفن بحب ونقدم أفضل الخامات لتناسب ديكور منزلك.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-white font-bold text-lg mb-2">روابط سريعة</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="#home" className="hover:text-amber-500 transition">الرئيسية</a>
              <a href="#custom" className="hover:text-amber-500 transition">صمم لوحتك</a>
              <a href="#gallery" className="hover:text-amber-500 transition">المنتجات</a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-white font-bold text-lg mb-2">تواصل معنا</h4>
            <p className="text-sm text-gray-400">للحجز والاستعلام يرجى التواصل معنا عبر الهاتف أو واتساب.</p>
            <div className="flex flex-col gap-3 mt-2 text-sm">
              <a href="tel:01507055701" className="flex items-center gap-2 text-gray-300 hover:text-amber-500 transition font-bold" dir="ltr">
                <span>015 0705 5701</span>
              </a>
              <a href="https://wa.me/201507055701" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-green-500 hover:text-green-400 transition font-bold">
                تواصل عبر واتساب
              </a>
            </div>
          </div>

        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} TaBlooh EL-DocToOoR. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
