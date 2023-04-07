import { useEffect, useState } from 'react';

export default function useFetch(
  url: string,
  params: Record<string, string>,
  token: string,
) {
  const [response, setResponse] = useState<Response | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const p = new URLSearchParams(params);
      const res = await fetch(url + '?' + p, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setResponse(res);
    };

    fetchData();
  }, [url]);

  return response;
}
