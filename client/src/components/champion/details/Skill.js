/** @format */

import { React, useState } from 'react';
import { Image, Button } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { HiChevronRight } from 'react-icons/hi';
import { RiSwordFill } from 'react-icons/ri';
import { BiRightArrowAlt } from 'react-icons/bi';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
function Skill(data) {
  const skills = data.skills;
  const skills_pr = data.skills_pr;

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });
  const isTablet = useMediaQuery({ maxWidth: 1124, minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 376 });

  const [show, setShow] = useState(false);
  return (
    <Fade cascade>
      <div
        className='container col-xl-10 py-5 skillContainer'
        id='hanging-icons'
      >
        <h2 className='pb-2 border-bottom'>
          <RiSwordFill style={{ marginBottom: '5px' }} /> 英雄技能
          <Button
            className='float-right'
            variant='dark'
            style={{ backgroundColor: 'var(--mainDarkBlue)' }}
            onClick={() => setShow(!show)}
          >
            {show ? 'Hide' : 'Show'} More
            {show ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </Button>
        </h2>
        <Reveal effect='fadeInUp' collapse duration={800} when={show}>
          <div>
            <div className='h5 py-1 text-center'>推薦優先點選順序</div>
            <div
              className='row g-5 container py-3'
              style={{
                margin: 'auto',
              }}
            >
              {skills_pr.map((val, key) => {
                return (
                  <div
                    className={`${
                      isDesktopOrLaptop || isTablet ? 'col-sm-3' : ''
                    }`}
                    style={{ width: '25%' }}
                    key={key}
                  >
                    <div
                      style={{
                        width: '100%',
                        textAlign:
                          key < 3
                            ? 'center'
                            : isDesktopOrLaptop
                            ? 'left'
                            : isMobile || isTablet
                            ? 'left'
                            : 'center',
                        marginLeft:
                          key < 3
                            ? '10px'
                            : isDesktopOrLaptop
                            ? '35px'
                            : isTablet
                            ? '10px'
                            : isMobile
                            ? '15px'
                            : '0px',
                      }}
                    >
                      <Image
                        className='bi'
                        src={val.s_img}
                        alt={val.sname}
                        width='40px'
                        height='40px'
                        roundedCircle
                      />
                      {key < 3 && (
                        <BiRightArrowAlt
                          size={`${
                            isDesktopOrLaptop || isTablet ? '40px' : '30px'
                          }`}
                          style={{
                            paddingBottom: '-5px',
                            marginLeft: isDesktopOrLaptop
                              ? '100px'
                              : isTablet
                              ? '35px'
                              : '0px',
                          }}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
        <div className='row g-5 py-4' style={{ margin: 'auto' }}>
          {skills.map((val, key) => {
            let skillType;
            if (val.c_sid === 4) {
              skillType = '大絕';
            } else if (val.c_sid === 5) {
              skillType = '被動';
            } else {
              skillType = val.c_sid;
            }
            return (
              <div className='skillBar' key={val.c_sid}>
                <Image
                  className='bi skillImg'
                  src={val.s_img}
                  alt={val.sname}
                  width='60px'
                  height='60px'
                  roundedCircle
                />
                <h3>
                  {`${skillType} `}
                  <HiChevronRight
                    size='30px'
                    style={{ paddingBottom: '3px', marginLeft: '-10px' }}
                  />
                  {val.sname}
                </h3>
                <p className='skillText'>{val.s_desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}

export default Skill;
