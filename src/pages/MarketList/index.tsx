import { ArrowCircleLeft, ArrowCircleRight } from 'iconsax-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListViewRow from '../../component/shared/ListViewRow';
import { Tab, Tabs } from '../../component/shared/Tabs';
import { useGetMarketList } from '../../hooks/MarketList';
import { Svg90RingWithBg } from '../../icons/iconsComponents';
import { commaThousondSeperator } from '../../lib/utils';
import { IMarketData } from '../../services/interface';
import { useStoredMarketData } from '../../store/Exchange';
import { TSimplifiedMarketData } from '../type';

const MarketList = () => {
  const { data, isFetching } = useGetMarketList();
  const [coinBase, setCoinBase] = useState<string>('');
  const setMarketData = useStoredMarketData((state) => state.setMarketData);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage(1);
  }, [coinBase]);

  function simplifyMarketData(data: IMarketData[]): TSimplifiedMarketData[] {
    return data?.map(
      ({
        id,
        currency1,
        currency2,
        title_fa,
        title,
        order_book_info,
        price_info,
        price,
      }) => ({
        id,
        currency1,
        currency2,
        title_fa,
        title,
        order_book_info,
        price_info,
        price,
      })
    );
  }
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    simplifyMarketData(data?.results as IMarketData[])?.length / 10
  );

  const paginatedData = {
    All: simplifyMarketData(data?.results as IMarketData[])?.slice(
      (currentPage - 1) * 10,
      currentPage * 10
    ),
    Toman: simplifyMarketData(data?.results as IMarketData[])
      ?.filter((item) => item.currency2.title === 'Toman')
      ?.slice((currentPage - 1) * 10, currentPage * 10),
    Tether: simplifyMarketData(data?.results as IMarketData[])
      ?.filter((item) => item.currency2.title === 'Tether')
      ?.slice((currentPage - 1) * 10, currentPage * 10),
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex flex-row w-screen bg-background">
      <Tabs onTabChange={(e) => setCoinBase(e)}>
        <Tab label="All" text={'همه'}>
          <div className=" flex flex-col gap-y-3 py-4 w-full">
            <ListViewRow
              rightSide={
                <div className="flex flex-col w-[220px] text-text">
                  <p className="text-disableText">نام</p>
                </div>
              }
              centerSide={
                <div className=" flex flex-col text-center gap-y-2 items-center justify-center">
                  <p dir="ltr" className={`text-disableText`}>
                    تغییرات 24 ساعت{' '}
                  </p>
                </div>
              }
              leftSide={
                <div className="flex flex-col gap-y-2 items-center w-[130px]">
                  <p className={`text-disableText`}>آخرین قیمت (تومان) </p>
                </div>
              }
              ArrowIcon={<div className={`w-[130px]`}></div>}
            />
            {isFetching ? (
              <div className="flex h-full flex-row justify-items-center items-center justify-center my-auto">
                <Svg90RingWithBg />
              </div>
            ) : (
              paginatedData.All?.map((marketItem, index) => (
                <ListViewRow
                  key={index}
                  rightSide={
                    <div className="flex flex-col w-[220px] text-text">
                      <p className="text-base font-bold">
                        {marketItem.title_fa}
                      </p>
                      <p className="text-disableText">{marketItem.title}</p>
                    </div>
                  }
                  centerSide={
                    <div className=" flex flex-col text-center gap-y-2 items-center justify-center">
                      <p
                        dir="ltr"
                        className={`font-bold text-center text-sm ${marketItem.price_info.change < 0 ? 'text-red-1' : 'text-green-1'}`}
                      >
                        {marketItem.price_info.change?.toFixed(2)} %
                      </p>
                    </div>
                  }
                  leftSide={
                    <div className="flex flex-col gap-y-2 items-center w-[130px]">
                      <p className={`text-text`}>
                        {commaThousondSeperator(+marketItem.price_info.price)}
                      </p>
                    </div>
                  }
                  ArrowIcon={
                    <button
                      onClick={() => navigate(`/${marketItem.id}`)}
                      className={`px-4 py-2 border hover:bg-purple hover:text-white mr-4 border-purple bg-transparent text-purple rounded ${
                        currentPage === totalPages
                          ? 'opacity-50 cursor-not-allowed'
                          : ''
                      }`}
                    >
                      جزییات فروش
                    </button>
                  }
                  logo={
                    <img
                      src={`${marketItem.currency1.image}`}
                      loading="lazy"
                      className="object-cover rounded-3xl w-[28px] h-[28px]"
                      alt={marketItem.currency1.title}
                    />
                  }
                />
              ))
            )}

            {totalPages && (
              <div className="flex justify-between items-center mt-4">
                <button
                  className={`px-4 py-2 rounded-full ${
                    currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                >
                  <ArrowCircleRight />
                </button>

                <span>
                  {currentPage} از {totalPages}
                </span>

                <button
                  className={`px-4 py-2 rounded-full ${
                    currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  onClick={handleNextPage}
                >
                  <ArrowCircleLeft />
                </button>
              </div>
            )}
          </div>
        </Tab>
        <Tab label="Tmn" text={'تومان'}>
          <div className=" flex flex-col gap-y-3 py-4 w-full">
            <ListViewRow
              rightSide={
                <div className="flex flex-col w-[220px] text-text">
                  <p className="text-disableText">نام</p>
                </div>
              }
              centerSide={
                <div className=" flex flex-col text-center gap-y-2 items-center justify-center">
                  <p dir="ltr" className={`text-disableText`}>
                    تغییرات 24 ساعت{' '}
                  </p>
                </div>
              }
              leftSide={
                <div className="flex flex-col gap-y-2 items-center w-[130px]">
                  <p className={`text-disableText`}>آخرین قیمت (تومان) </p>
                </div>
              }
              ArrowIcon={<div className={`w-[130px]`}></div>}
            />
            {isFetching ? (
              <div className="flex h-full flex-row justify-items-center items-center justify-center my-auto">
                <Svg90RingWithBg />
              </div>
            ) : (
              paginatedData.Toman?.map((marketItem, index) => (
                <ListViewRow
                  key={index}
                  rightSide={
                    <div className="flex flex-col w-[220px] text-text">
                      <p className="text-base font-bold">
                        {marketItem.title_fa}
                      </p>
                      <p className="text-disableText">{marketItem.title}</p>
                    </div>
                  }
                  centerSide={
                    <div className=" flex flex-col text-center gap-y-2 items-center justify-center">
                      <p
                        dir="ltr"
                        className={`font-bold text-center text-sm ${marketItem.price_info.change < 0 ? 'text-red-1' : 'text-green-1'}`}
                      >
                        {marketItem.price_info.change?.toFixed(2)} %
                      </p>
                    </div>
                  }
                  leftSide={
                    <div className="flex flex-col gap-y-2 items-center w-[130px]">
                      <p className={`text-text`}>
                        {commaThousondSeperator(+marketItem.price_info.price)}
                      </p>
                    </div>
                  }
                  ArrowIcon={
                    <button
                      onClick={() => navigate(`/${marketItem.id}`)}
                      className={`px-4 py-2 border hover:bg-purple hover:text-white mr-4 border-purple bg-transparent text-purple rounded ${
                        currentPage === totalPages
                          ? 'opacity-50 cursor-not-allowed'
                          : ''
                      }`}
                    >
                      جزییات فروش
                    </button>
                  }
                  logo={
                    <img
                      src={`${marketItem.currency1.image}`}
                      loading="lazy"
                      className="object-cover rounded-3xl w-[28px] h-[28px]"
                      alt={marketItem.currency1.title}
                    />
                  }
                />
              ))
            )}

            {totalPages && (
              <div className="flex justify-between items-center mt-4">
                <button
                  className={`px-4 py-2 rounded-full ${
                    currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                >
                  <ArrowCircleRight />
                </button>

                <span>
                  {currentPage} از {totalPages}
                </span>

                <button
                  className={`px-4 py-2 rounded-full ${
                    currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  onClick={handleNextPage}
                >
                  <ArrowCircleLeft />
                </button>
              </div>
            )}
          </div>
        </Tab>
        <Tab label="Usdt" text={'تتر'}>
          <div className=" flex flex-col gap-y-3 py-4 w-full">
            <ListViewRow
              rightSide={
                <div className="flex flex-col w-[220px] text-text">
                  <p className="text-disableText">نام</p>
                </div>
              }
              centerSide={
                <div className=" flex flex-col text-center gap-y-2 items-center justify-center">
                  <p dir="ltr" className={`text-disableText`}>
                    تغییرات 24 ساعت{' '}
                  </p>
                </div>
              }
              leftSide={
                <div className="flex flex-col gap-y-2 items-center w-[130px]">
                  <p className={`text-disableText`}>آخرین قیمت (تومان) </p>
                </div>
              }
              ArrowIcon={<div className={`w-[130px]`}></div>}
            />
            {isFetching ? (
              <div className="flex h-full flex-row justify-items-center items-center justify-center my-auto">
                <Svg90RingWithBg />
              </div>
            ) : (
              paginatedData.Tether?.map((marketItem, index) => (
                <ListViewRow
                  key={index}
                  rightSide={
                    <div className="flex flex-col w-[220px] text-text">
                      <p className="text-base font-bold">
                        {marketItem.title_fa}
                      </p>
                      <p className="text-disableText">{marketItem.title}</p>
                    </div>
                  }
                  centerSide={
                    <div className=" flex flex-col text-center gap-y-2 items-center justify-center">
                      <p
                        dir="ltr"
                        className={`font-bold text-center text-sm ${marketItem.price_info.change < 0 ? 'text-red-1' : 'text-green-1'}`}
                      >
                        {marketItem.price_info.change?.toFixed(2)} %
                      </p>
                    </div>
                  }
                  leftSide={
                    <div className="flex flex-col gap-y-2 items-center w-[130px]">
                      <p className={`text-text`}>
                        {commaThousondSeperator(+marketItem.price_info.price)}
                      </p>
                    </div>
                  }
                  ArrowIcon={
                    <button
                      onClick={() => navigate(`/${marketItem.id}`)}
                      className={`px-4 py-2 border hover:bg-purple hover:text-white mr-4 border-purple bg-transparent text-purple rounded ${
                        currentPage === totalPages
                          ? 'opacity-50 cursor-not-allowed'
                          : ''
                      }`}
                    >
                      جزییات فروش
                    </button>
                  }
                  logo={
                    <img
                      src={`${marketItem.currency1.image}`}
                      loading="lazy"
                      className="object-cover rounded-3xl w-[28px] h-[28px]"
                      alt={marketItem.currency1.title}
                    />
                  }
                />
              ))
            )}

            {totalPages && (
              <div className="flex justify-between items-center mt-4">
                <button
                  className={`px-4 py-2 rounded-full ${
                    currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                >
                  <ArrowCircleRight />
                </button>

                <span>
                  {currentPage} از {totalPages}
                </span>

                <button
                  className={`px-4 py-2 rounded-full ${
                    currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  onClick={handleNextPage}
                >
                  <ArrowCircleLeft />
                </button>
              </div>
            )}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default MarketList;
