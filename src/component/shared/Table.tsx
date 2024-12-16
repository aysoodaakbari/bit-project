import { useStoredExchangeData } from "../../store/Exchange";
import moment from 'moment-jalaali';

interface TableProps {
  data: Array<any>;
  trade?:boolean
  order?:boolean
}
const Table: React.FC<TableProps> = ({data,order}) => {
const setExchange=useStoredExchangeData(state=>state.setExchangeData)

  return (
    order ? <div className="p-4">
      <table className="table-auto w-full border-none">
        <thead>
          <tr className={`text-text`}>
            <th className="px-4 py-2 font-light text-[14px]" >قیمت</th>
            <th className="px-4 py-2 font-light text-[14px]" >مقدار</th>
            <th className="px-4 py-2 font-light text-[14px]" >مجموع</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row,index) => (
            <tr key={index} className={`text-text`} onClick={()=>setExchange({price:row.price,value:row.value,remain:row.remain})}>
              <td className="px-4 py-2 text-[14px]" >{row.price}</td>
              <td className="px-4 py-2 text-[14px]" >{row.value}</td>
              <td className="px-4 py-2 text-[14px]" >{row.remain}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div> :   <div className="p-4">
     <table className="table-auto w-full border-none">
       <thead>
         <tr className={`text-text`}>
           <th className="px-4 py-2 font-light text-[14px]" >قیمت مچ شده</th>
           <th className="px-4 py-2 font-light text-[14px]" >مقدار</th>
           <th className="px-4 py-2 font-light text-[14px]" >زمان</th>
         </tr>
       </thead>
       <tbody>
         {data?.map((row,index) => (
           <tr key={index} className={`text-text`} onClick={()=>setExchange({price:row.price,value:row.value,remain:row.remain})}>
             <td className="px-4 py-2 text-[14px]" >{row.match_amount}</td>
             <td className="px-4 py-2 text-[14px]" >{row.price}</td>
             <td className="px-4 py-2 text-[14px]" >{moment( row.time, 'jYYYY/jMM/jDD').format('M/D/YYYY')}</td>
           </tr>
         ))}
       </tbody>
     </table>
   </div>
  );
};

export default Table;