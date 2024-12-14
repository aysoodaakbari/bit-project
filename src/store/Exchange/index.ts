import { create } from "zustand";
import { IExchangeDataStore } from "./interface";

export const useStoredExchangeData = create<IExchangeDataStore>((set) => ({
    exchangeData: { price: 0, value: 0, remain: 0 },
    setExchangeData(exchangeData) {
      set({ exchangeData: exchangeData });
    },
  }));