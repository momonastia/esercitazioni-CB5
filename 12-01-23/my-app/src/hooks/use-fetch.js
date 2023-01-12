import { useEffect, useState } from "react";

const ENDPOINT = {
  BASE: `https://random-data-api.com/api/v2`,

  get BLOOD_TYPES() {
    return `${this.BASE}/blood_types`;
  },
};

export function useFetch(urlToFetch) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setData(null);
    setError(null);
    setLoading(true);

    try {
      const data = await fetch(urlToFetch).then((r) => r.json());
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, loading, refetch: fetchData };
}
