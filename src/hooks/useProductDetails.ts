import type { IProduct } from "@/components/ProductCard.vue";
import { ref } from "vue";

export const useSingleProduct = () => {
  const product = ref<IProduct>();

  const getSingleProduct = async (id: number) => {
    await fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data: IProduct) => (product.value = data));
  };

  return { getSingleProduct, product };
};
