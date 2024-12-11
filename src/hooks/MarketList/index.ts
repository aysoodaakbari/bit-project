import { useQuery } from "@tanstack/react-query";
import { getMarketList } from "../../services/MarketList";

export const useGetMarketList = () => {
    return useQuery({
      queryKey: ['market-list'],
      queryFn: () => getMarketList(),
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    });
  };
  