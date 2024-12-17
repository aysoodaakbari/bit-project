import { useQuery } from '@tanstack/react-query';
import {
  getMarketList,
  getOrder,
  getTradeList,
} from '../../services/MarketList';

export const useGetMarketList = () => {
  return useQuery({
    queryKey: ['market-list'],
    queryFn: () => getMarketList(),
    staleTime: 5000,
    refetchOnWindowFocus: false,
  });
};

export const useOrderList = (id: string, enabled: boolean, type: string) => {
  return useQuery({
    queryKey: ['order-list'],
    queryFn: () => getOrder(id, type),
    staleTime: 0,
    refetchOnWindowFocus: false,
    refetchInterval: 3000,
    enabled: enabled,
  });
};

export const useTradeList = (id: string, enabled: boolean) => {
  return useQuery({
    queryKey: ['order-list'],
    queryFn: () => getTradeList(id),
    staleTime: 0,
    refetchOnWindowFocus: false,
    refetchInterval: 3000,
    enabled: enabled,
  });
};
