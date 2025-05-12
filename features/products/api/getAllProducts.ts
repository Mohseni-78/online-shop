import { Product } from '@/features/products/types/product';
import { apiClient } from '@/core/api/axios';

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await apiClient.get(`/products`);
  return response.data;
};
