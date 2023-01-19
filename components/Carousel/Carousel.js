import { Carousel } from "react-responsive-carousel";
import { skillsImages } from "../../data/skillsImages";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "../../styles/GlobalComponents";
import Image from "next/image";
import { CarouselArea, ItemDots, SwipItem, ImgBox } from "./CarouselStyles";


const CarouselSkills = () => {
  return (
    <Container>
      <CarouselArea>
        <Carousel
          showArrows={true}
          showIndicators={true}
          infiniteLoop={true}
          dynamicHeight={false}
          showThumbs={false}
        >
          {skillsImages.map((item) => (
            <SwipItem key={item.id}>
              <ImgBox>
                <Image
                  src={item.image}
                  width={400}
                  height={400}
                  priority
                  alt="slides"
                />
              </ImgBox>
              <ItemDots>

              </ItemDots>
            </SwipItem>
          ))}
        </Carousel>
      </CarouselArea>
    </Container>
  );
};

export default CarouselSkills;
