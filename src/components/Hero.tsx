import { motion } from 'motion/react';
import { Image as ImageIcon, Phone, MessageCircle, Tag } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gray-950">
      <div className="absolute inset-0 w-full h-full opacity-40 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 font-bold text-sm mb-8 backdrop-blur-sm"
        >
          <Tag className="w-4 h-4" />
          <span>يوجد خصومات عند طلب أكثر من قطعتين!</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight flex flex-col gap-2"
        >
          <span className="text-5xl md:text-6xl lg:text-7xl text-gray-100 font-extrabold tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }} dir="ltr">TaBlooh EL-DocToOoR</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl font-medium"
        >
          اكتشف تشكيلتنا الحصرية والمميزة من التابلوهات الجاهزة بسعر <span className="text-amber-400 font-bold">1200 ج.م</span> للتابلوه.
          <br/> أو صمم تابلوهك الخاص بصورك المفضلة وشوف التصميم حي بسعر <span className="text-amber-400 font-bold">1500 ج.م</span>.
        </motion.p>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href="#custom" className="px-8 py-4 bg-amber-500 text-gray-950 font-black rounded-full hover:bg-amber-400 transition-all text-lg shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] flex items-center justify-center gap-2">
            <ImageIcon className="w-6 h-6" />
            صمم تابلوهك (1500 ج.م)
          </a>
          <a href="#gallery" className="px-8 py-4 bg-white/10 text-white border border-white/20 backdrop-blur-md font-bold rounded-full hover:bg-white/20 transition-all text-lg flex items-center justify-center">
            تصفح الجاهز (1200 ج.م)
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex flex-col items-center gap-3 text-gray-400"
        >
          <p className="text-sm">للحجز والاستعلام المباشر:</p>
          <div className="flex items-center gap-6">
            <a href="tel:01507055701" className="flex items-center gap-2 hover:text-amber-400 transition font-bold text-lg">
              <Phone className="w-5 h-5" />
              <span dir="ltr">015 0705 5701</span>
            </a>
            <a href="https://wa.me/201507055701" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-green-500 hover:text-green-400 transition font-bold text-lg">
              <MessageCircle className="w-5 h-5" />
              <span>واتساب</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
