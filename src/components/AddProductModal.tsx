import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Upload } from 'lucide-react';
import { Product, categories } from '../data';

export default function AddProductModal({ isOpen, onClose, onAdd }: { isOpen: boolean, onClose: () => void, onAdd: (p: Product) => void }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[1] || 'مودرن');
  const [size, setSize] = useState('70x100 سم');
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) return alert('الرجاء رفع صورة للتابلوه');
    if (!title) return alert('الرجاء إدخال اسم التابلوه');
    
    const newProduct: Product = {
      id: Date.now().toString(),
      title,
      category,
      price: 1200,
      image,
      size
    };
    onAdd(newProduct);
    
    setTitle('');
    setImage(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
            onClick={onClose} 
          />
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900">رفع منتج للبيع</h3>
              <button type="button" onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition cursor-pointer text-gray-600 hover:text-red-500">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">الصورة</label>
                <div className="relative border-2 border-dashed border-gray-300 rounded-2xl h-48 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition overflow-hidden">
                    {image ? (
                        <img src={image} className="w-full h-full object-cover" alt="Preview"/>
                    ) : (
                        <div className="text-center text-gray-500 flex flex-col items-center">
                            <Upload className="w-8 h-8 mb-2 text-gray-400" />
                            <span className="text-sm border bg-white px-4 py-2 rounded-full font-medium text-gray-700 shadow-sm mt-2 pointer-events-none">اختيار صورة من الجهاز</span>
                        </div>
                    )}
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">اسم التابلوه</label>
                <input 
                  type="text" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                  placeholder="رقم الموديل أو اسم التصميم"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">القسم</label>
                    <select 
                      value={category} 
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                    >
                      {categories.filter(c => c !== 'الكل').map(c => (
                          <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">المقاس</label>
                    <input 
                      type="text" 
                      value={size} 
                      onChange={(e) => setSize(e.target.value)} 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                      placeholder="للمعاينة فقط"
                    />
                  </div>
              </div>

              <div className="pt-2">
                  <div className="bg-amber-50 text-amber-800 px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between mb-4">
                      <span>السعر الموحد للتابلوهات:</span>
                      <span className="text-lg">١٢٠٠ ج.م</span>
                  </div>
                  <button type="submit" className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition shadow-lg shadow-black/10 cursor-pointer">
                      إضافة المنتج لمتجرك
                  </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
