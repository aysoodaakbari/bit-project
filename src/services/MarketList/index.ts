import { getData } from "../ApiClient";
import { IListOrder, IMarketList} from "../interface";

export const getMarketList = (): Promise<IMarketList> => {
    return getData<IMarketList>(`mkt/markets/`);
  };
  
  export const getOrder = (id:string,type:string): Promise<IListOrder[]> => {
    return getData<IListOrder[]>(`mth/actives/${id}/?type=${type}`);
  };
  