import { Tab, Tabs } from '../../component/shared/Tabs';
import { useGetMarketList } from '../../hooks/MarketList';
import { MarketData } from '../../services/interface';
import { TSimplifiedMarketData } from '../type';

const MarketList = () => {
  const { data, isFetching, isError } = useGetMarketList();

  function simplifyMarketData(data: MarketData[]): TSimplifiedMarketData[] {
    return data?.map(({ currency1, currency2 }) => ({ currency1, currency2 }));
  }
  console.log(simplifyMarketData(data?.results as MarketData[]));
  return (
    <div className=" flex flex-row">
      <Tabs>
        <Tab label="All">
          <div className="py-4">
            <h2 className="text-lg font-medium mb-2">all</h2>
          </div>
        </Tab>
        <Tab label="tmn">
          <div className="py-4">
            <h2 className="text-lg font-medium mb-2">tmn</h2>
            <p className="text-gray-700">
           
            </p>
          </div>
        </Tab>
        <Tab label="usdt">
          <div className="py-4">
            <h2 className="text-lg font-medium mb-2">usdt</h2>
            <p className="text-gray-700">
             
            </p>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default MarketList;
