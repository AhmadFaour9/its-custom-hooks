import { useState } from 'react';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';

const useDelete = <T = unknown>(url: string, config: AxiosRequestConfig = {}) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteData = async () => {
    setLoading(true);
    try {
      const response = await axios.delete<T>(url, config);
      setData(response.data);
    } catch (err) {
      setError((err as AxiosError).message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, deleteData };
};

export default useDelete;
