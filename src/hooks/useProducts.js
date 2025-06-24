// src/hooks/useProducts.js
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useProducts(apiUrl) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setData(response.data.products || response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || 'Something went wrong');
        setLoading(false);
      });
  }, [apiUrl]);

  return { data, loading, error };
}
