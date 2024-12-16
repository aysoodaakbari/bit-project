import { ICurrency, IPriceInfo } from "../../services/interface";

export interface IExchangeDataStore {
    exchangeData: {
        price:number,value:number,remain:number
    };
    setExchangeData: ( data:{price:number,value:number,remain:number}) => void;
}
export interface IMarketDataStore {
    marketeData: {id:number, currency1: ICurrency|undefined;currency2: ICurrency|undefined,price_info:IPriceInfo|undefined}[];
    setMarketData: ( data:{id:number, currency1: ICurrency|undefined;currency2: ICurrency|undefined, price_info:IPriceInfo|undefined}[]) => void;
}