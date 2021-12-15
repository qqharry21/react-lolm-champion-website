/** @format */

import { React, useEffect, useState, useRef } from 'react';
import { Tabs, Tab, CardDeck } from 'react-bootstrap';
import Axios from 'axios';
import EquipmentCards from './EquipmentCards';

function EquipmentContainer() {
  // Data from back-end to front-end
  const [equipmentList, setEquipmentList] = useState([]);
  // Setup if the lastElement shows up
  const [loading, setLoading] = useState(true);
  // Setup equipmentList pageNumber
  const [pageNumber, setPageNumber] = useState(0);
  // If there have more data
  const [hasMore, setHasMore] = useState(true);

  const [categoryList, setCategoryList] = useState([]);

  const [key, setKey] = useState(0);
  // It will only run when the component out
  useEffect(() => {
    document.title = 'equipments List';
    fetchCategoryList();
  }, []);

  const fetchCategoryList = async () => {
    const url = `http://localhost:3001/equipments`;
    const result = await Axios.get(url).catch((err) => {
      console.log('Error:', err);
    });
    if (result && result.data) {
      setCategoryList(result.data);
    }
  };

  // Function fetchEquipmentList when scrolling
  const fetchEquipmentList = async (pageNumber, key) => {
    const url = `http://localhost:3001/equipments/${pageNumber}/${key}`;
    const result = await Axios.get(url).catch((err) => {
      console.log('Error:', err);
    });
    // If championList isn't empty
    if (result && result.data.length > 0) {
      if (result.data.length < 12) {
        setHasMore(false);
      }
      setEquipmentList((equipmentList) => [...equipmentList, ...result.data]);
      setLoading(true);
    }
    console.log('result cate', result.data);
  };

  // Fetch if loading is true
  const loadMore = () => {
    // Add pageNumber
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
    // console.log('setPage');
    fetchEquipmentList(pageNumber, key);
  };

  useEffect(() => {
    setEquipmentList([]);
    setPageNumber(0);
    loadMore();
  }, [key]);

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
    <div className='championList'>
      <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab eventKey='0' title='All'>
          <CardDeck className='championList'>
            {equipmentList.map((val, index) => {
              return <EquipmentCards key={index} {...val} />;
            })}
          </CardDeck>
        </Tab>
        {categoryList.map((val, tabIndex) => {
          return (
            <Tab key={tabIndex} eventKey={val.et_id} title={val.et_name}>
              <CardDeck className='championList'>
                {equipmentList.map((val, index) => {
                  return <EquipmentCards key={index} {...val} />;
                })}
              </CardDeck>
            </Tab>
          );
        })}
      </Tabs>
      <div ref={lastElement}></div>
    </div>
  );
}

export default EquipmentContainer;
