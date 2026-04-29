import React, { useState } from 'react';
import { Product, CartItem, mockProducts } from './data';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGallery from './components/ProductGallery';
import CustomFrame from './components/CustomFrame';
import Footer from './components/Footer';
import AddProductModal from './components/AddProductModal';
import { X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddNewProduct = (newProduct: Product) => {
    setProducts([newProduct, ...products]);
  };

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900 scroll-smooth flex flex-col">
      <Navbar 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)} 
        onOpenAddProduct={() => setIsAddProductOpen(true)}
      />
      
      <main className="flex-1">
        <Hero />
        <CustomFrame />
        <ProductGallery products={products} onAddToCart={handleAddToCart} />
      </main>
      
      <Footer />

      <AddProductModal 
        isOpen={isAddProductOpen} 
        onClose={() => setIsAddProductOpen(false)} 
        onAdd={handleAddNewProduct} 
      />

      {/* Cart Drawer - Modal & Overlay combined block */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-[100] flex justify-end">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
              onClick={() => setIsCartOpen(false)} 
            />
            
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <h3 className="text-2xl font-bold text-gray-900">سلة المشتريات</h3>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-200 rounded-full transition cursor-pointer text-gray-600 hover:text-red-500">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                {cart.length === 0 ? (
                  <div className="text-center flex flex-col items-center justify-center h-40 text-gray-400 mt-10">
                    <ShoppingCartIcon className="w-16 h-16 mb-4 text-gray-200" />
                    <p className="text-lg">سلتك فارغة حالياً</p>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex gap-4 items-center bg-white border border-gray-100 rounded-2xl p-3 shadow-sm hover:shadow-md transition">
                      <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-xl border border-gray-100" />
                      <div className="flex-1">
                        <h4 className="font-bold text-md mb-1 text-gray-800">{item.title}</h4>
                        <p className="text-amber-600 font-bold mb-2">{item.price} ج.م</p>
                        <div className="flex items-center gap-3">
                          <span className="text-xs bg-gray-100 px-3 py-1 rounded-full font-medium text-gray-600 shadow-sm border border-gray-200">الكمية: {item.quantity}</span>
                        </div>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:bg-red-50 hover:text-red-500 p-2 rounded-xl transition-colors shrink-0">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              <div className="p-6 border-t border-gray-100 bg-gray-50/80 backdrop-blur pb-8">
                <div className="flex justify-between items-center mb-6 text-xl font-bold">
                  <span className="text-gray-600">الإجمالي:</span>
                  <span className="text-gray-900">{cartTotal} ج.م</span>
                </div>
                <a
                  href={`https://wa.me/201507055701?text=${encodeURIComponent('أريد طلب التابلوهات التالية بمبلغ إجمالي ' + cartTotal + ' ج.م')}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-4 flex items-center justify-center gap-2 rounded-2xl font-bold text-lg transition shadow-lg ${cart.length === 0 ? 'bg-gray-300 text-white cursor-not-allowed shadow-none' : 'bg-green-600 text-white hover:bg-green-700 shadow-green-600/20'}`}
                >
                  <MessageCircle className="w-6 h-6" />
                  إتمام الطلب عبر واتساب
                </a>
                <p className="text-xs text-center text-gray-500 mt-4 leading-relaxed font-medium">سيتم تحويلك إلى مستشار المبيعات عبر الواتساب لتأكيد الصور ونوع التغليف</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Inline fallback icon for empty cart
function ShoppingCartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
