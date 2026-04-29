import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Upload, MessageCircle } from 'lucide-react';

export default function CustomFrame() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    }
  };

  return (
    <section id="custom" className="py-24 bg-gray-50 border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="px-5 py-2 bg-amber-100 text-amber-800 font-bold rounded-full text-sm">
                تصميم مخصص
              </span>
              <span className="px-5 py-2 bg-gray-900 text-white font-bold rounded-full text-sm">
                1500 ج.م
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">صورك، ذكرياتك، <br/>على جدرانك</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              هل تود طباعة صورك الخاصة؟ قم بتجربتها الآن داخل البرواز وتخيل شكلها النهائي على الحائط. ارفع صورتك واستمتع بمعاينة حية، وتواصل معنا لتأكيد طلبك.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <label className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-bold cursor-pointer hover:bg-gray-800 transition shadow-lg hover:shadow-xl group">
                <Upload className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                <span>ارفع صورتك للمعاينة</span>
                <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
              </label>

              <a href="https://wa.me/201507055701" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white rounded-full font-bold hover:bg-green-600 transition shadow-lg shadow-green-500/20 group">
                <MessageCircle className="w-5 h-5" />
                <span>حجز التصميم</span>
              </a>
            </div>

            <p className="mt-6 text-sm text-amber-700 font-bold bg-amber-50 inline-block px-4 py-2 rounded-lg border border-amber-200">
              * يوجد خصومات عند طلب أكثر من قطعتين!
            </p>
          </div>

          <div className="relative h-[550px] bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center justify-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center">
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[4px]"></div>

            {imagePreview ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative z-10 w-64 h-80 bg-white shadow-2xl p-4 border border-gray-200"
              >
                 {/* Frame aesthetic */}
                <div className="w-full h-full border-[6px] border-gray-900 relative shadow-inner">
                   {/* Inner white matte */}
                   <div className="absolute inset-4 bg-white shadow-[inset_0px_0px_10px_rgba(0,0,0,0.1)]">
                     <img src={imagePreview} className="w-full h-full object-cover" alt="Preview" />
                   </div>
                </div>
              </motion.div>
            ) : (
              <div className="relative z-10 text-center text-gray-800 bg-white/95 p-8 rounded-2xl shadow-xl border border-white max-w-xs w-full">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-dashed border-gray-300">
                  <Upload className="w-7 h-7 text-gray-400" />
                </div>
                <p className="font-bold text-lg mb-1">تابلوهك المخصص</p>
                <p className="text-sm text-gray-500">ارفع صورة 1500 ج.م</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
