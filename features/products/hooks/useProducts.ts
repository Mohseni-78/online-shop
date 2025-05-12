import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '@/features/products/api/getAllProducts';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });
};
