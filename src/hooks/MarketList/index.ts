import { useQuery } from "@tanstack/react-query";
import { getMarketList, getOrder } from "../../services/MarketList";

export const useGetMarketList = () => {
    return useQuery({
      queryKey: ['market-list'],
      queryFn: () => getMarketList(),
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    });
  };
  
  export const useOrderList = (id:string,type:string,enabled:boolean) => {
    return useQuery({
      queryKey: ['order-list'],
      queryFn: () => getOrder(id,type),
      refetchOnWindowFocus: false,
      enabled:enabled
    });
  };


  