// src/hooks/usePost.ts
import { useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

const usePost = <T = unknown>(url: string, config?: AxiosRequestConfig) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const postData = async (postData: any) => {
    setLoading(true);
    try {
      const response = await axios.post<T>(url, postData, config);
      setData(response.data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, postData };
};

export default usePost;
