import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import TotalCalculatorForm from '../../component/Exchange/form';
import Table from '../../component/shared/Table';
import { Tab, Tabs } from '../../component/shared/Tabs';
import { useGetMarketList, useOrderList, useTradeList } from '../../hooks/MarketList';
import { commaThousondSeperator } from '../../lib/utils';
import { IListOrder, ITradeList } from '../../services/interface';

const Exchange = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>('buy');
  const { data} = useGetMarketList();
  const { data: sellData } = useOrderList(
    location.pathname.replace('/', ''),
    activeTab === 'sell',
    'sell',
  );
  const { data: buyData } = useOrderList(
    location.pathname.replace('/', ''),
    activeTab === 'buy',
    'buy',
  );
  const { data: tradeData } = useTradeList(
    location.pathname.replace('/', ''),
    activeTab === 'trade',

  );
  const filterMarketData = data?.results?.find(
    (item) => item.id.toString() === location.pathname.replace('/', '')
  );

  return (
    <div dir="rtl" className=" flex flex-col w-full h-svh bg-background">
      <div className="flex flex-row justify-between w-full items-center px-[30px] border-b-[2px] border-border">
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-row justify-center items-center gap-x-3">
            <img
              src={filterMarketData?.currency1.image}
              loading="lazy"
              className="object-cover rounded-3xl w-[40px] h-[40px]"
              alt={''}
            />
            <p className={` flex flex-col gap-y-2 items-center text-text`}>
              {filterMarketData?.price_info?.price &&
                commaThousondSeperator(+filterMarketData?.price_info?.price)}
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-x-2 justify-center items-center pb-7">
          <div className="flex flex-row gap-x-9  text-text">
            <div className=" flex flex-col  text-text">
              <p>قیمت بازار تتری</p>
              <p>{filterMarketData?.price_info?.price}</p>
            </div>
            <div className=" flex flex-col">
              <p>حجم 24h</p>
              <p>{filterMarketData?.price_info.value}</p>
            </div>
            <div className=" flex flex-col">
              <p>بیشترین قیمت </p>
              <p>{filterMarketData?.price_info.max}</p>
            </div>
            <div className=" flex flex-col">
              <p> کمترین قیمت </p>
              <p>{filterMarketData?.price_info.min}</p>
            </div>
            <div className=" flex flex-col">
              <p> تغییر قیمت</p>
              <p>{filterMarketData?.price_info.change}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full overflow-y-scroll h-svh">
        <div className="h-svh w-[30%]">
          <TotalCalculatorForm
            maketPrice={filterMarketData?.price_info?.price as string}
          />
        </div>

        <div className="overflow-y-scroll h-svh w-[30%]">
          <Tabs onTabChange={(e) => setActiveTab(e)}>
            <Tab label="buy" text={'خرید'}>
              <div className="flex flex-col">
                <Table data={buyData?.slice(0, 10) as IListOrder[]} order />
              </div>
            </Tab>
            <Tab label="sell" text="فروش">
              <div className="flex flex-col">
                <Table data={sellData?.slice(0, 10) as IListOrder[]} order />
              </div>
            </Tab>
            <Tab label="trade" text="معاملات">
            <div className="flex flex-col">
                <Table data={tradeData?.slice(0, 10) as ITradeList[]} trade />
              </div>
            </Tab>
          </Tabs>
        </div>
        <div style={{ float: 'left', width: '40%', height: '480px' }}>
          <TradingViewWidget
            symbol={`BINANCE:${filterMarketData?.currency1.code}${filterMarketData?.currency2.code}`}
            interval="15"
            timezone="Etc/UTC"
            theme={Themes.DARK}
            locale="en"
            autosize
          />
        </div>
      </div>
    </div>
  );
};

export default Exchange;
