import React, { useRef, useEffect } from "react";
import { Dot } from 'pure-react-carousel';
// import ReactHover, { Trigger, Hover } from 'react-hover'

import "./circleStyles.css";

export default function App(props) {
  const graph = useRef(null);

  useEffect(() => {
    const ciclegraph = graph.current;
    const circleElements = ciclegraph.childNodes;

    let angle = 360 - 90;
    let dangle = 360 / circleElements.length;

    for (let i = 0; i < circleElements.length; i++) {
      let circle = circleElements[i];
      angle += dangle;
      circle.style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth / 2
        }px) rotate(-${angle}deg)`;
    }
  }, []);

  const optionsCursorTrueWithMargin = {
    followCursor: true,
    // shiftX: 20,
    // shiftY: 0,
  }

  return (
    <div className="dot-circle">
      <div className="ciclegraph" ref={graph}>
        {
          props.sliderImages.reverse().map((image, index) => (
            <Dot
              className="circle"
              key={index}
              slide={index}
            />
            // <ReactHover options={optionsCursorTrueWithMargin}>
            //   <Trigger type="trigger">
            //   </Trigger>
            //   <Hover type="hover">
            //     <h1> Hover data </h1>
            //   </Hover>
            // </ReactHover>
          ))
        }
      </div>
    </div>
  );
}
