'use client';
import { useEffect, useState } from 'react';
import ScrollToTop from './scrollTop';
import Image from 'next/image';

function TopArrow() {
  const [arrowShow, setArrowShow] = useState<boolean>(false);

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setArrowShow(true);
    } else {
      setArrowShow(false);
    }
  }
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);
  return (
    <a onClick={ScrollToTop} className='back-to-top'>
      {arrowShow ? (
        <div>
          <TopArrow.Arrow />
        </div>
      ) : null}
    </a>
  );
}

export default TopArrow;

TopArrow.Arrow = function TopArrowArrow() {
  return (
    <Image
      width={35}
      height={35}
      src='https://www.reshot.com/preview-assets/icons/ZGEKU95YAJ/arrow-up-ZGEKU95YAJ.svg'
      alt='arrow to top'
      className='back-to-top-icon'
    />
  );
};
