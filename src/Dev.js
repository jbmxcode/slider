import React from 'react';
import { CarouselProvider, Slider, Slide, Image, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import CircleImage from './images/control-circle.png';
import DotCircle from './DotCircle'

const sliderImages = [
  {
    title: "CONOCER",
    text: "sample text 1",
    source: "https://source.unsplash.com/hpjSkU2UYSU/1920x1080/",
  },
  {
    title: "",
    text: "sample text 2",
    source: "https://source.unsplash.com/hGV2TfOh0ns/1920x1080/",
  },
  {
    title: "",
    text: "sample text 3",
    source: "https://source.unsplash.com/HyTVmlxKVOA/1920x1080/",
  },
  {
    title: "",
    text: "sample text 4",
    source: "https://source.unsplash.com/yAu40E-ZyZI/1920x1080/",
  },
  {
    title: "",
    text: "sample text 5",
    source: "https://source.unsplash.com/yAu40E-ZyZI/1920x1080/",
  },
  {
    title: "",
    text: "sample text 6",
    source: "https://source.unsplash.com/yAu40E-ZyZI/1920x1080/",
  },
]

class Dev extends React.Component {
  render() {
    return (
      <div
      >
        <div class="content-play">
          <div class="mask mask-1"></div>
          <div class="mask mask-2"></div>
          <div class="mask mask-3"></div>

          {/* <div class="circle-rotator">
            <svg version="1.1" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
              <circle cx="250" cy="250" r="248" />
            </svg>
          </div> */}

          <div class="content-links">
            <button class="action action-play">
              <svg xmlns="http://www.w3.org/2000/svg" width="18.981" height="21.694"
                viewBox="0 0 18.981 21.694">
                <path
                  d="M17.982,9.1,3.068.281A2.022,2.022,0,0,0,0,2.03v17.63a2.032,2.032,0,0,0,3.068,1.75L17.982,12.6A2.032,2.032,0,0,0,17.982,9.1Z"
                  transform="translate(0 -0.002)" /></svg>
              <span class="hidden">Play</span>
            </button>
          </div>
        </div>
        <div className="dot-circle-wrapper">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={sliderImages.length}
            isIntrinsicHeight
            isPlaying
          >
            <Slider>
              {
                sliderImages.map((image, index) => (
                  <Slide key={index} index={index}>
                    <Image src={image.source} isBgImage />
                  </Slide>
                ))
              }
            </Slider>
            <DotCircle sliderImages={sliderImages}/>
          </CarouselProvider>
        </div>
      </div >
    );
  }
}

export default Dev;