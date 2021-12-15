import { React, useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import Axios from 'axios';

export default function ChampionTabs() {
  const [allChampion, setAllChampion] = useState([]);

  useEffect(() => {
    fetchAllChampion();
  }, []);

  const fetchAllChampion = async () => {
    const result = await Axios.get(
      `http://localhost:3001/champions`
    );
    Axios.all([result])
      .then(
        Axios.spread((result) => {
          setAllChampion({
            clothes: result.data[0],
            skills: result.data[1],
            runes: result.data[2],
            types: result.data[3],
            spells: result.data[4],
          });
        })
      )
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <div className='container py-5'>
      <Nav
        className='championTabNav'
        justify
        variant='tabs'
        defaultActiveKey=''
        style={{marginTop: '68px'}}
      >
        <Nav.Item>
          <Nav.Link eventKey='link-0'>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-1'>Loooonger NavLink</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-2'>Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-3'>Link1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-4'>Link2</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
