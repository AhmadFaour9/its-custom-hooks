import { useState } from 'react';
import axios from 'axios';

const usePut = (url, config = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const putData = async (putData) => {
    setLoading(true);
    try {
      const response = await axios.put(url, putData, config);
      setData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, putData };
};

export default usePut;
