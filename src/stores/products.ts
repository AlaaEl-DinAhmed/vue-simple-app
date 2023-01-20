import type { IProduct } from "@/components/ProductCard.vue";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state() {
    return {
      products: [] as IProduct[],
      singleProduct: {} as IProduct,
    };
  },
  actions: {
    async getProducts(): Promise<IProduct[]> {
      return await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data: IProduct[]) => (this.products = data));
    },
    async getSingleProduct(id: number): Promise<IProduct> {
      return await fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data: IProduct) => (this.singleProduct = data));
    },
  },
});
