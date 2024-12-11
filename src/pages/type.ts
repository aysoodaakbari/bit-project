import { MarketData } from "../services/interface";

export type TSimplifiedMarketData = Pick<MarketData, 'currency1' | 'currency2'>;
