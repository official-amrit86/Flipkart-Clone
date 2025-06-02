// BannerCarousel.jsx
import React from "react";
import Slider from "react-slick";
// BannerCarousel.jsx
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function BannerCarousel() {
  const banners = [
    { id: 1, link: "#", src: "./assets/Carousel/banner.png" },
    { id: 2, link: "#", src: "./assets/Carousel/image copy 2.png" },
    { id: 3, link: "#", src: "./assets/Carousel/image copy 3.png" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <section className="">
      <Slider {...settings}>
        {banners.map((banner) => (
          <a href={banner.link} key={banner.id}>
            <img src={banner.src} alt={`Banner ${banner.id}`} className="w-full rounded h-130" />
          </a>
        ))}
      </Slider>
    </section>
  );
}

export default BannerCarousel;
