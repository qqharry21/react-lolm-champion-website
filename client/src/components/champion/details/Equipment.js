/** @format */

import { useState } from 'react';
import Slider from 'react-slick';
import { Card, Button, Image } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { GiSwitchWeapon } from 'react-icons/gi';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import Axios from 'axios';
import Fade from 'react-reveal/Fade';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Equipment(data) {
  const equips = data.equips;
  const [show, setShow] = useState(false);
  const [equipDetail, setEquipDetail] = useState([]);
  console.log('data', data);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });
  const isTablet = useMediaQuery({ maxWidth: 1124, minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 376 });

  const NextArrow = ({ onClick }) => {
    return <FaArrowRight className='arrow next' onClick={onClick} />;
  };

  const PrevArrow = ({ onClick }) => {
    return <FaArrowLeft className='arrow prev' onClick={onClick} />;
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    // swipe: isDesktopOrLaptop ? false : true,
    slidesToShow: isDesktopOrLaptop ? 5 : isTablet ? 3 : isMobile ? 1 : 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      setImageIndex(next);
      setShow(!show);
      setShow(false);
    },
  };

  const fetchEquipDetails = async (eid) => {
    const url = `http://localhost:3001/champions_detail/${eid}`;
    const result = await Axios.get(url).catch((err) => {
      console.log('Error:', err);
    });
    if (result && result.data) {
      setEquipDetail(result.data);
    }
  };

  return (
    <div className='equipContainer'>
      <h1 className='pb-1 border-bottom clothesTitle'>
        <GiSwitchWeapon style={{ marginBottom: '8px' }} /> 裝備推薦
      </h1>

      <Slider {...settings}>
        {equips.map((val, idx) => {
          var desc = val.e_desc;
          var descSubTitle = desc.split('</font>/', 1).shift();
          var descContent = desc.split('</font>/').pop();
          return (
            <div
              key={idx}
              className={
                idx === imageIndex
                  ? 'equipmentSlide activeSlide'
                  : 'equipmentSlide unShowSlide'
              }
            >
              <Card>
                <Card.Img variant='top' src={val.e_img} alt={val.ename} />
                <Card.Body>
                  <Card.Title className='text-center fs-3'>
                    {val.ename}
                  </Card.Title>
                  <Card.Text
                    className='text-center border-top p-2'
                    style={{ height: '80px' }}
                    dangerouslySetInnerHTML={{ __html: descSubTitle }}
                  ></Card.Text>
                  <div className='text-center'>
                    <Fade
                      left
                      opposite
                      cascade
                      collapse
                      duration={300}
                      when={show && idx === imageIndex}
                    >
                      <div style={{ margin: '7px' }}>
                        <h5
                          style={{
                            color: 'var(--mainBlue)',
                          }}
                        >{`${val.e_type}`}</h5>
                        <h6
                          className='text-center '
                          dangerouslySetInnerHTML={{ __html: descContent }}
                        />
                        <div style={{ height: '120px' }}>
                          <h5 style={{ color: 'var(--mainYellow)' }}>
                            合成方式
                          </h5>
                          {equipDetail.map((res, key) => {
                            if (res.eid) {
                              return (
                                <Image
                                  key={key}
                                  roundedCircle
                                  style={{
                                    width: '40px',
                                    height: '40px',
                                    marginLeft: '2px',
                                    marginRight: '2px',
                                  }}
                                  src={`${res.e_img}`}
                                />
                              );
                            }
                          })}
                        </div>
                      </div>
                    </Fade>
                    <Button
                      disabled={idx === imageIndex ? false : true}
                      variant='dark'
                      style={{ backgroundColor: 'var(--mainDarkBlue)' }}
                      onClick={() => {
                        setShow(!show);
                        !show && fetchEquipDetails(val.eid);
                      }}
                    >
                      {show && idx === imageIndex ? 'Hide' : 'Show'} Detail
                      {show ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Equipment;
