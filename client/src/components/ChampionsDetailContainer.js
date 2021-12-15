/** @format */

import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Axios from 'axios';
import ChampionDetails from './champion/ChampionDetails';

const ChampionsDetail = () => {
  const location = useLocation();
  const { name, id } = useParams();
  const [champDetails, setChampDetails] = useState(undefined);

  const championInfo = location.state;
  // console.log('location state:', championInfo);

  /* 畫面初始值 */
  useEffect(() => {
    /* function fetchDetail 抓取該英雄的詳細資料 */
    const fetchChampionDetail = async () => {
      const result = await Axios.get(
        `http://localhost:3001/champions_detail/id=${id}&${name}`
      );
      Axios.all([result])
        .then(
          Axios.spread((result) => {
            setChampDetails({
              clothes: result.data[0],
              skills: result.data[1],
              skills_pr: result.data[2],
              runes: result.data[3],
              types: result.data[4],
              spells: result.data[5],
              equips: result.data[6],
            });
          })
        )
        .catch((err) => {
          console.error('Error:', err);
        });
    };
    fetchChampionDetail();
    document.title = `${name}'s Detail`;
  }, [id, name]);

  // console.log('champDetails', champDetails);

  return (
    <React.Fragment>
      {champDetails && (
        <ChampionDetails details={champDetails} info={championInfo} />
      )}
    </React.Fragment>
  );
};
export default ChampionsDetail;
