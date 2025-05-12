import { apiClient } from '@/core/api/axios';
import { Product } from '../types/product';

export const getProductById = async (id: string): Promise<Product | null> => {
  try {
    const response = await apiClient.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    return null;
  }
};
