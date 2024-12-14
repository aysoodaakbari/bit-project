export interface IExchangeDataStore {
    exchangeData: {
        price:number,value:number,remain:number
    };
    setExchangeData: ( data:{price:number,value:number,remain:number}) => void;
}