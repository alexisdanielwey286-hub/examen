export type Producto = {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
};

export const productos: Producto[] = [
  { id: 1, nombre: "Laptop", categoria: "Computo", precio: 15000, stock: 8 },
  { id: 2, nombre: "Mouse", categoria: "Accesorios", precio: 250, stock: 40 },
  { id: 3, nombre: "Teclado", categoria: "Accesorios", precio: 600, stock: 25 },
  { id: 4, nombre: "Monitor", categoria: "Computo", precio: 4200, stock: 12 },
];