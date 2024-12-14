import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useStoredExchangeData } from '../../store/Exchange';

interface FormValues {
  values: number;
  price: number;
}

const TotalCalculatorForm: React.FC = () => {
  const [total, setTotal] = useState<number>(0);
  const exchange = useStoredExchangeData((state) => state.exchangeData);

  const { control, setValue, watch } = useForm<FormValues>({
    defaultValues: {
      values: 0,
      price: 0,
    },
  });

  const values = watch('values');
  const price = watch('price');

  useEffect(() => {
    setTotal(values * price);
  }, [values, price]);

  return (
    <div className=" bg-background flex flex-col items-center justify-center px-4">
      <div className="w-full bg-background rounded-lg  p-6">
        <form noValidate>
          <div className="mb-4">
            <label
              htmlFor="values"
              className="block text-sm font-medium text-gray-700"
            >
              تعداد
            </label>
            <Controller
              name="values"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  id="values"
                  type="number"
                  placeholder="تعداد را وارد کنید"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              )}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              قیمت واحد
            </label>
            <Controller
              name="price"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  id="price"
                  type="number"
                  placeholder="قیمت واحد را وارد کنید"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              )}
            />
          </div>
          <div className="mt-4 p-4 bg-green-100 rounded-md text-green-800 text-center">
            مجموع: {total.toLocaleString()} تومان
          </div>
        </form>
      </div>
    </div>
  );
};

export default TotalCalculatorForm;
