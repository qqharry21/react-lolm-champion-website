/** @format */

import { React, useEffect, useState, useRef } from 'react';
import { CardDeck } from 'react-bootstrap';
import Axios from 'axios';
import Champions from './champion/Champions';

function ChampionsContainer() {
  // Data from back-end to front-end
  const [championList, setChampionList] = useState([]);
  // Setup if the lastElement shows up
  const [loading, setLoading] = useState(true);
  // Setup championList pageNumber
  const [pageNumber, setPageNumber] = useState(0);
  // If there have more data
  const [hasMore, setHasMore] = useState(true);

  // It will only run when the component out
  useEffect(() => {
    document.title = 'Champions List';
  }, []);

  // Function fetchChampionList when scrolling
  const fetchChampionList = async (pageNumber) => {
    const url = `http://localhost:3001/champions/${pageNumber}`;
    const result = await Axios.get(url).catch((err) => {
      console.log('Error:', err);
    });
    // If championList isn't empty
    if (result && result.data.length > 0) {
      if (result.data.length < 12) {
        setHasMore(false);
        // console.log('setHasMore False');
      }
      setChampionList((championList) => [...championList, ...result.data]);
      // console.log(result.data);
      setLoading(true);
      // console.log('setChampionList');
    }
  };

  // Fetch if loading is true
  const loadMore = () => {
    fetchChampionList(pageNumber);
    // Add pageNumber
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
    // console.log('setPage');
  };

  // The last element in return
  const lastElement = useRef();

  // Run when the loading changed
  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          // If isIntersecting is false means didn't show the element yet
          if (entries[0].isIntersecting) {
            console.log('entry in');
            if (hasMore) {
              // console.log('hasMore true');
              loadMore();
              // console.log('load more');
              observer.unobserve(lastElement.current);
              console.log('unobserve');
              setLoading(false);
            } else {
              // console.log('hasMore false');
              observer.unobserve(lastElement.current);
              // console.log('unobserve');
              return 0;
            }
          }
        },
        { threshold: 1 }
      );
      observer.observe(lastElement.current);
      console.log('observe');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <>
      <CardDeck className='championList'>
        {championList.map((val, index) => {
          return <Champions key={index} {...val} />;
        })}
      </CardDeck>
      <div ref={lastElement}></div>
    </>
  );
}

export default ChampionsContainer;
