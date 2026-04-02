import { Product, Stall, StallProduct } from "../types";

export const PRODUCTS: Product[] = [
  { id: 'p1', name: 'Tomate Italiano', category: 'Legumes', unit: 'caixa', image: 'https://picsum.photos/seed/tomato/400/300' },
  { id: 'p2', name: 'Banana Nanica', category: 'Frutas', unit: 'caixa', image: 'https://picsum.photos/seed/banana/400/300' },
  { id: 'p3', name: 'Alface Crespa', category: 'Verduras', unit: 'unidade', image: 'https://picsum.photos/seed/lettuce/400/300' },
  { id: 'p4', name: 'Batata Monalisa', category: 'Legumes', unit: 'saco', image: 'https://picsum.photos/seed/potato/400/300' },
  { id: 'p5', name: 'Cebola Nacional', category: 'Legumes', unit: 'saco', image: 'https://picsum.photos/seed/onion/400/300' },
  { id: 'p6', name: 'Maçã Gala', category: 'Frutas', unit: 'caixa', image: 'https://picsum.photos/seed/apple/400/300' },
  { id: 'p7', name: 'Ovos Brancos G', category: 'Ovos', unit: 'caixa', image: 'https://picsum.photos/seed/eggs/400/300' },
  { id: 'p8', name: 'Laranja Pera', category: 'Frutas', unit: 'saco', image: 'https://picsum.photos/seed/orange/400/300' },
  { id: 'p9', name: 'Feijão Carioca', category: 'Grãos', unit: 'saco', image: 'https://picsum.photos/seed/beans/400/300' },
  { id: 'p10', name: 'Arroz Agulhinha', category: 'Grãos', unit: 'saco', image: 'https://picsum.photos/seed/rice/400/300' },
  { id: 'p11', name: 'Pimenta do Reino', category: 'Temperos', unit: 'kg', image: 'https://picsum.photos/seed/pepper/400/300' },
  { id: 'p12', name: 'Orégano Seco', category: 'Temperos', unit: 'kg', image: 'https://picsum.photos/seed/oregano/400/300' },
];

export const STALLS: Stall[] = [
  { id: 's1', name: 'Hortifruti do Zé', ownerId: 'u2', location: 'Pavilhão A, Box 05', rating: 4.8, image: 'https://picsum.photos/seed/stall1/400/300' },
  { id: 's2', name: 'Frutas Selecionadas Silva', ownerId: 'u3', location: 'Pavilhão B, Box 12', rating: 4.5, image: 'https://picsum.photos/seed/stall2/400/300' },
  { id: 's3', name: 'Verduras Frescas Cia', ownerId: 'u4', location: 'Pavilhão C, Box 01', rating: 4.9, image: 'https://picsum.photos/seed/stall3/400/300' },
];

export const STALL_PRODUCTS: StallProduct[] = [
  { id: 'sp1', stallId: 's1', productId: 'p1', price: 45.00, stock: 50, quality: 'Extra', updatedAt: new Date().toISOString() },
  { id: 'sp2', stallId: 's1', productId: 'p4', price: 85.00, stock: 30, quality: 'A', updatedAt: new Date().toISOString() },
  { id: 'sp3', stallId: 's2', productId: 'p2', price: 35.00, stock: 100, quality: 'Extra', updatedAt: new Date().toISOString() },
  { id: 'sp4', stallId: 's2', productId: 'p6', price: 120.00, stock: 20, quality: 'Extra', updatedAt: new Date().toISOString() },
  { id: 'sp5', stallId: 's3', productId: 'p3', price: 2.50, stock: 200, quality: 'A', updatedAt: new Date().toISOString() },
  { id: 'sp6', stallId: 's3', productId: 'p5', price: 60.00, stock: 40, quality: 'B', updatedAt: new Date().toISOString() },
  { id: 'sp7', stallId: 's1', productId: 'p9', price: 180.00, stock: 15, quality: 'Extra', updatedAt: new Date().toISOString() },
  { id: 'sp8', stallId: 's2', productId: 'p11', price: 55.00, stock: 25, quality: 'A', updatedAt: new Date().toISOString() },
  { id: 'sp9', stallId: 's3', productId: 'p7', price: 15.00, stock: 300, quality: 'Extra', updatedAt: new Date().toISOString() },
];
