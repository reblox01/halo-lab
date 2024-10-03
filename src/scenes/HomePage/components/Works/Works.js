import React from 'react';
import { useHomeWorksAssets, usePortfolioWorksAssets } from '@hooks/queries';
import Title from './components/Title';
import ScrollGallery from '@components/ScrollGallery/ScrollGallery';
import styles from './Works.module.scss';
import Item from './components/Item';

const Works = () => {
  const { dribbbleRed, textCircled } = usePortfolioWorksAssets();
  const {
    Art,
    eScooter,
    Web,
    Hommy,
    Investments,
    Lazy,
    Starbank,
    Teampoint,
    Travel,
    Tude,
    Realty,
    North,
  } = useHomeWorksAssets();
  const imageList = [
    [Web],
    [Investments, Travel, Starbank],
    [eScooter],
    [Art, Lazy, Teampoint],
    [North],
    [Realty, Hommy, Tude],
  ];

  return (
    <div className={styles.container}>
      <Title icon={dribbbleRed} signature={textCircled} />
      <ScrollGallery step={5}>
        {imageList.map(item => {
          return <Item images={item} key={item[0].name} />;
        })}
      </ScrollGallery>
    </div>
  );
};

export default Works;
