import { useEffect, useState } from "react";

type Price = {
  min: number;
  max: number;
};

const useGetRangeValues = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<Price>({ min: 0, max: 0 });

  useEffect(() => {
    const fetchRange = async (): Promise<void> => {
      try {
        const response = await fetch(
          `http://demo4362601.mockable.io/mangotest`
        );
        const price = await response.json();

        setData(price);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRange();
  }, []);

  return {
    isLoading,
    isError,
    data,
  };
};

export default useGetRangeValues;
