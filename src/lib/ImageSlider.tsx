import React, { useState } from "react";
import { Button, Container, Image, Text } from ".";

export interface IImage {
  title: string;
  url: string;
}

interface ImageSliderProps {
  images: IImage[]; // Array of image URLs
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Container className="flex flex-col justify-center items-center">
      <Text>{images[currentIndex].title}</Text>
      <Image
        className=""
        source={images[currentIndex].url}
        alt={`Slide ${currentIndex}`}
        title={images[currentIndex].title}
      />
      <Container className="flex flex-row justify-center items-center space-x-2">
        <Button title="Prev" onClick={goToPrevious} className="p-4" />
        <Button title="Next" onClick={goToNext} className="p-4" />
      </Container>
    </Container>
  );
};

export default ImageSlider;
