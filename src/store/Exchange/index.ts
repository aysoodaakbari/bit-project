import { create } from "zustand";
import { IExchangeDataStore, IMarketDataStore } from "./interface";

export const useStoredExchangeData = create<IExchangeDataStore>((set) => ({
    exchangeData: { price: 0, value: 0, remain: 0 },
    setExchangeData(exchangeData) {
      set({ exchangeData: exchangeData });
    },
  }));
  export const useStoredMarketData = create<IMarketDataStore>((set) => ({
    marketeData: { id: 0, currency1:undefined, currency2: undefined,price_info:undefined },
    setMarketData(marketeData) {
      set({ marketeData: marketeData });
    },
  }));