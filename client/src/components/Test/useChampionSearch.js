import { useEffect, useState } from 'react';
import Axios from 'axios';


export default function useChampionSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [ChampionList, setChampionList] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    Axios({
      method: "GET",
      url: "http://openlibrary.org/search.json",
      params: {q: query, page: pageNumber},
      cancelToken: new Axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setChampionList((prev) => {
          return [...prev, res.data];
        });
        console.log("res data", res.data);
      })
      .catch((err) => {
        if (Axios.isCancel(err)) return;
      });
    return () => cancel();
  }, [query, pageNumber]);

  return null;
}