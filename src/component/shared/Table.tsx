import { useStoredExchangeData } from "../../store/Exchange";

interface TableProps {
  data: Array<any>;
}
const Table: React.FC<TableProps> = ({data}) => {
const setExchange=useStoredExchangeData(state=>state.setExchangeData)

  return (
    <div className="p-4">
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
    </div>
  );
};

export default Table;