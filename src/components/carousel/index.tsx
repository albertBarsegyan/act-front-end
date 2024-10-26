import classNames from 'classnames';
import React, { PropsWithChildren, useEffect, useState } from 'react';

import { LeftIcon, RightIcon } from '@/components/icons/direction-icons';

import styles from './styles.module.css';

const Carousel = ({ children }: Readonly<PropsWithChildren>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = React.Children.count(children);

  const goToNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);

  const goToPrev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);

  const goToIndex = (index: number) => setCurrentIndex(index);

  useEffect(() => {
    const timeInterval = setInterval(goToNext, 2000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        {React.Children.map(children, (child, index) => {
          return (
            <div
              key={index}
              className={classNames(styles.carouselItem, { [styles.carouselTtemActive]: index === currentIndex })}
            >
              {child}
            </div>
          );
        })}
      </div>
      <div className={styles.controls}>
        <button onClick={goToPrev}>
          <LeftIcon />
        </button>
        <button onClick={goToNext}>
          <RightIcon />
        </button>
      </div>
      <div className={styles.dots}>
        {Array.from({ length: totalItems }).map((_, index) => (
          <button
            key={index}
            className={classNames(styles.dot, { [styles.dotActive]: index === currentIndex })}
            onClick={() => goToIndex(index)}
          >
            <div></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
