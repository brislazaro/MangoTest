import { useEffect, useState } from "react";

const useGetFixedRangeValues = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    const fetchFixedRange = async (): Promise<void> => {
      try {
        const response = await fetch(
          `http://demo4362601.mockable.io/exercise2`
        );
        const prices = await response.json();

        const pricesMintoMax = prices.sort();

        setData(pricesMintoMax);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFixedRange();
  }, []);

  return {
    isLoading,
    isError,
    data,
  };
};

export default useGetFixedRangeValues;
