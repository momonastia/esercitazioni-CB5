import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider.module.scss";

import React, { Fragment } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { useState } from "react";

export default function SimpleSlider() {
  const [slidesToShow, setSlidesToShow] = useState(1);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Fragment>
      <label htmlFor="slides-to-show">Slides to show</label>{" "}
      {/* not finished */}
      <input
        type="number"
        name="slides-to-show"
        id="slides-to-show"
        onInput={(e) => {
          setSlidesToShow(e.target.value);
        }}
      />
      <Slider slidesToShow={slidesToShow} className={styles.content}>
        <div>
          <Image
            src="https://api.lorem.space/image/pizza?w=1280&h=720&hash=A89D0DE6"
            alt="first-image"
            width={1000}
            height={200}
          />
        </div>
        <div>
          <Image
            src="https://api.lorem.space/image/pizza?w=1280&h=720&hash=225E6693"
            alt="first-image"
            width={1000}
            height={200}
          />
        </div>
        <div>
          <Image
            src="https://api.lorem.space/image/pizza?w=1280&h=720&hash=7F5AE56A"
            alt="first-image"
            width={1000}
            height={200}
          />
        </div>
      </Slider>
    </Fragment>
  );
}
