import React, { useRef, useState, Fragment } from 'react';
import Carousel from 'react-native-snap-carousel';

import { Metrics } from '~/theme';

export interface CarouselItemProps {
  title: string;
  description: string;
  image: JSX.Element;
  overlap: boolean;
}

export interface CarouselProps {
  data: object[];
  CarouselItem: React.FC<any>;
  Pagination?: React.FC<{ length: number; activeDotIndex: number }>;
  moveOnPress?: boolean;
  loop?: boolean;
  selectedTab?: number;
  handleChange?: (index: number) => void;
}

export default function CustomCarousel({
  data,
  CarouselItem,
  Pagination,
  moveOnPress,
  loop,
  selectedTab,
  handleChange,
}: CarouselProps): JSX.Element {
  const carouselRef = useRef<any>(null);

  React.useEffect(() => {
    if (carouselRef && carouselRef.current) {
      carouselRef.current.snapToItem(selectedTab);
    }
  }, [selectedTab]);

  const { width } = Metrics.screen;

  const [sliderActiveSlide, setSliderActiveSlide] = useState(0);

  function snapToNextSlide(): void {
    if (carouselRef && carouselRef.current) {
      carouselRef.current.snapToNext();
    }
  }

  const handleSlideChange = (index: number): void => {
    if (handleChange) {
      handleChange(index);
    }
    setSliderActiveSlide(index);
  };

  return (
    <Fragment>
      {Pagination && <Pagination length={data.length} activeDotIndex={sliderActiveSlide} />}
      <Carousel
        ref={carouselRef}
        sliderWidth={width}
        sliderHeight={500}
        itemWidth={width - 40}
        data={data}
        renderItem={({ item, index }): JSX.Element => (
          <CarouselItem item={{ ...item }} cardIndex={index} onPress={moveOnPress && snapToNextSlide} />
        )}
        onSnapToItem={handleSlideChange}
        initialNumToRender={data.length}
        firstItem={0}
        loop={loop}
        loopClonesPerSide={1}
      />
      {Pagination && <Pagination length={data.length} activeDotIndex={sliderActiveSlide} />}
    </Fragment>
  );
}
