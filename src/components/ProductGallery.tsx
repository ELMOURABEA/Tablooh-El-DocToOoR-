import { useState } from 'react';
import { motion } from 'motion/react';
import { Product } from '../data';
import { categories } from '../data';
import { ShoppingCart } from 'lucide-react';

export default function ProductGallery({ products, onAddToCart }: { products: Product[], onAddToCart: (product: Product) => void }) {
  const [filter, setFilter] = useState("الكل");

  const filteredProducts = filter === "الكل" ? products : products.filter(p => p.category === filter);

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="px-5 py-2 bg-amber-100 text-amber-800 font-bold rounded-full text-sm">
              تشكيلة تابلوهات حصرية
            </span>
            <span className="px-5 py-2 bg-gray-900 text-white font-bold rounded-full text-sm">
              1200 ج.م
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">تشكيلة التابلوهات الجاهزة</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-4">اختر من بين تشكيلتنا المميزة من التابلوهات التي تناسب ذوقك و ديكور منزلك الداخلي بأفضل جودة وخامات مستوردة.</p>
          <p className="text-white font-bold text-sm bg-amber-600 inline-block px-5 py-2.5 rounded-lg shadow-lg">
             🎉 يوجد خصومات رائعة عند طلب أكثر من قطعتين!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2.5 rounded-full font-bold transition-all text-sm ${
                filter === cat
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-3xl mb-5 relative shadow-md group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={product.image}
                  alt={product.title}
                  onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=800&q=80' }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 transition-opacity duration-300 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100">
                  <button
                    onClick={() => onAddToCart(product)}
                    className="bg-white text-black px-8 py-3.5 rounded-full font-bold shadow-2xl flex items-center gap-2 hover:bg-amber-600 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                  >
                    <ShoppingCart className="w-5 h-5"/>
                    أضف للسلة
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1.5">{product.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                    <span className="bg-gray-100 px-2 py-1 rounded-md">{product.category}</span>
                    <span>•</span>
                    <span>{product.size}</span>
                  </div>
                </div>
                <span className="text-xl font-black text-amber-600 whitespace-nowrap">{product.price} ج.م</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
