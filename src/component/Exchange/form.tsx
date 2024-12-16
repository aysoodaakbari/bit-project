import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

interface FormValues {
  values: number;
  price: number;
}

const TotalCalculatorForm = ({ maketPrice }: { maketPrice: string }) => {
  const [total, setTotal] = useState<number>(0);

  const { control, setValue, watch } = useForm<FormValues>({
    defaultValues: {
      values: 0,
      price: +maketPrice,
    },
  });

  const values = watch('values');
  const price = watch('price');

  useEffect(() => {
    setTotal(values * +price);
  }, [values, price]);

  return (
    <div className=" bg-background flex flex-col items-center justify-center px-4">
      <div className="w-full bg-background rounded-lg py-3">
        <form noValidate>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-text"
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
                  className="mt-1 block w-full px-4 py-2 border border-text rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              )}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="values"
              className="block text-sm font-medium text-text"
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
                  className="mt-1 block w-full px-4 py-2 border border-text rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              )}
            />
          </div>

          <div className="mt-4 p-4 bg-purple rounded-md text-white text-center">
            {total && ` مجموع: ${total.toLocaleString()} تومان`}
          </div>
        </form>
      </div>
    </div>
  );
};

export default TotalCalculatorForm;
