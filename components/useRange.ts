import { useEffect, useState } from "react";

type Price = {
  min: number;
  max: number;
};

const useRange = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<Price | null>(null);

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

export default useRange;
