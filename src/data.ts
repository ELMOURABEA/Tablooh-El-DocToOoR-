export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  image: string;
  size: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export const categories = ["الكل", "مودرن", "كلاسيك", "إسلامي", "تجريدي"];

export const mockProducts: Product[] = Array.from({ length: 82 }, (_, i) => ({
  id: `${i + 1}`,
  title: `تابلوه حصري #${i + 1}`,
  category: i % 3 === 0 ? 'مودرن' : i % 2 === 0 ? 'كلاسيك' : 'تجريدي',
  price: 1200,
  image: `/products/${i + 1}.jpg`, // Place your images in the `public/products/` directory before deploying to Vercel
  size: 'Custom Size'
}));
