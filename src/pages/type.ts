import { MarketData } from "../services/interface";

export type TSimplifiedMarketData = Pick<MarketData, 'currency1' | 'currency2'|'title_fa'|'order_book_info'|'title'|'price'|'price_info'>;
export interface IListOrder{
    amount: number;
    remain: number;
    price: number;
    value: number;
}[]