export interface IListOrder {
  amount: number;
  remain: number;
  price: number;
  value: number;
}
export interface ITradeList {
  time: string;
  price: string;
  value: string;
  match_amount: string;
  type: string;
  match_id: string;
}
export interface IMarketList {
  count: number;
  next: null;
  previous: null;
  results: Array<IMarketData>;
}
interface ITag {
  id: number;

  name: string;

  name_en: string;

  has_chart: boolean;
}

export interface ICurrency {
  id: number;

  title: string;

  title_fa: string;

  code: string;

  tradable: boolean;

  for_test: boolean;

  image: string;

  decimal: number;

  decimal_amount: number;

  decimal_irt: number;

  color: string;

  high_risk: boolean;

  show_high_risk: boolean;

  withdraw_commission: string;

  tags: ITag[];

  etf: boolean;

  for_binvest: boolean;

  for_loan: boolean;

  for_stake: boolean;

  recommend_for_deposit_weight: number;
}

interface IOrderBookInfo {
  created_at: string | null;

  price: string;

  change: number;

  min: string;

  max: string;

  time: string;

  mean: string | null;

  value: string;

  amount: string;
}

interface InternalPriceInfo {
  created_at: number;

  price: string;

  change: number;

  min: string;

  max: string;

  time: string | null;

  mean: string | null;

  value: string | null;

  amount: string | null;
}

export interface IPriceInfo {
  created_at: number;

  price: string;

  change: number;

  min: string;

  max: string;

  time: string | null;

  mean: string | null;

  value: string | null;

  amount: string | null;
}

export interface IMarketData {
  id: number;

  currency1: ICurrency;

  currency2: ICurrency;

  tradable: boolean;

  otc_tradable: boolean;

  coming_soon: boolean;

  for_test: boolean;

  otc_sell_percent: string;

  otc_buy_percent: string;

  otc_max_buy_amount: string;

  otc_max_sell_amount: string;

  order_book_info: IOrderBookInfo;

  internal_price_info: InternalPriceInfo;

  price_info: IPriceInfo;

  price: string;

  title: string;

  code: string;

  title_fa: string;

  trading_view_source: string;

  trading_view_symbol: string;

  otc_market: boolean;

  text: string;

  volume_24h: string;

  market_cap: string;

  circulating_supply: string;

  all_time_high: string;

  popularity_weight: number;

  freshness_weight: number;

  price_increment: string | null;
}
