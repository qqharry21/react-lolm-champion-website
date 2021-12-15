/** @format */

import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ToTopButton() {
  // 按鈕是否出現
  const [toTopBool, setToTopBool] = useState(true);

  // 到頂
  const handleScrollToTop = () => {
    // console.log('click lemon');
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  // 偵測視窗位置改變出現效果
  const handleBtnByScroll = () => {
    // console.log(window.pageYOffset);
    if (window.pageYOffset > 500) {
      setToTopBool(true);
    }
    if (window.pageYOffset <= 500) {
      setToTopBool(false);
    }
  };

  // 在載入階段加掛事件
  useEffect(() => {
    console.log('didMount')
    window.addEventListener('scroll', handleBtnByScroll);
  }, []);

  // 在卸載階段移除事件
  useEffect(() => {
    return () => {
        console.log('unMount')
      window.removeEventListener('scroll', handleBtnByScroll);
    };
  }, []);

  // 如果在[載入階段]執行'事件加掛', 卻沒有在[卸載階段]執行'事件移除', 在元件切換時, 會導致加掛的事件會藉由[卸載階段]重複被加掛執行

  return (
    <div
      className='poe-toTop'
      style={toTopBool ? { right: '3%', opacity: '1' } : {}}
      onClick={() => {
        handleScrollToTop();
      }}
    >
      <FaArrowUp size='2rem' />
    </div>
  );
}

export default ToTopButton;
