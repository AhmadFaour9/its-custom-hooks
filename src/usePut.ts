import { useState } from 'react';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';

const usePut = <T = unknown>(url: string, config: AxiosRequestConfig = {}) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const putData = async (putData: T) => {
    setLoading(true);
    try {
      const response = await axios.put<T>(url, putData, config);
      setData(response.data);
    } catch (err) {
      setError((err as AxiosError).message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, putData };
};

export default usePut;
