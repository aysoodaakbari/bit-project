import { getData } from "../ApiClient";
import { IMarketList } from "../interface";

export const getMarketList = (): Promise<IMarketList> => {
    return getData<IMarketList>(`mkt/markets/`);
  };
  