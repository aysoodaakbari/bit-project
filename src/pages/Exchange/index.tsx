import { useLocation } from 'react-router-dom';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import Table from '../../component/shared/Table';
import { Tab, Tabs } from '../../component/shared/Tabs';
import { useGetMarketList, useOrderList } from '../../hooks/MarketList';
import { commaThousondSeperator } from '../../lib/utils';
import { IListOrder } from '../../services/interface';
import { useState } from 'react';
import { Svg90RingWithBg } from '../../icons/iconsComponents';
import TotalCalculatorForm from '../../component/Exchange/form';
import { useStoredExchangeData } from '../../store/Exchange';

const Exchange = () => {
  const location = useLocation();
  const [activeTab,setActiveTab]=useState<string>('buy')
  //const { data, isFetching, isError } = useGetMarketList();
  const { data: sellData ,isFetching:sellIsFetching} = useOrderList(
    location.pathname.replace('/', ''),
    'sell',activeTab==='sell'
  );
  const { data: buyData,isFetching:buyIsFetching } = useOrderList(
    location.pathname.replace('/', ''),
    'buy'
    ,activeTab==='buy'
  );
  return (
    <div dir="rtl" className=" flex flex-col w-full h-svh bg-background">
      <div className="flex flex-row justify-between w-full  items-center px-[90px]">
        <div className="flex flex-row gap-x-2 justify-center items-center">
          <div className="flex flex-row justify-center items-center">
            <img
              src={''}
              loading="lazy"
              className="object-cover rounded-3xl w-[28px] h-[28px]"
              alt={''}
            />
            <p className={` flex flex-col gap-y-2 items-center text-text`}>
              {commaThousondSeperator(988880000888)}
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-x-2 justify-center items-center">
          <div className="flex flex-row gap-x-9  text-text">
            <div className=" flex flex-col  text-text">
              <p>قیمت بازار تتری</p>
              <p>۰۰۰۰</p>
            </div>
            <div className=" flex flex-col">
              <p>حجم 24h</p>
              <p>۰۰۰۰</p>
            </div>
            <div className=" flex flex-col">
              <p>بیشترین قیمت </p>
              <p>۹۹۹۹۹۹۹</p>
            </div>
            <div className=" flex flex-col">
              <p> کمترین قیمت </p>
              <p>۶۶۶۶۶۶۶</p>
            </div>
            <div className=" flex flex-col">
              <p> تغییر قیمت</p>
              <p>اااااااا</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full overflow-y-scroll h-svh">
        <div className="h-svh w-[30%]">
        <TotalCalculatorForm/>
        </div>

        <div className="overflow-y-scroll h-svh w-[30%]">
          <Tabs onTabChange={(e)=>setActiveTab(e)}>
            <Tab label="buy"  text={'خرید'}>
             {buyIsFetching ? <div className="flex flex-col justify-center items-center h-full my-auto">
               <Svg90RingWithBg/>
              </div>: <div className="flex flex-col">
                <Table data={buyData as IListOrder[]}  />
              </div>} 
            </Tab>
            <Tab label="sell" text='فروش'>
            {sellIsFetching ? <div className="flex flex-col justify-center items-center h-full my-auto">
               <Svg90RingWithBg/>
              </div>: <div className="flex flex-col">
                <Table data={sellData as IListOrder[]}  />
              </div>} 
            </Tab>
            <Tab label="trade" text='معاملات'>
              <div className="py-4">
                <h2 className="text-lg font-medium mb-2">تتر</h2>
                <p className="text-gray-700"></p>
              </div>
            </Tab>
          </Tabs>
        </div>
        <div style={{ float: 'left', width: '40%', height: '100vh' }}>
          <TradingViewWidget
            symbol="BINANCE:BTCUSDT"
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
