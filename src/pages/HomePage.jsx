// src/pages/HomePage.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HomePage.css";

const HomePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/data/animeData.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("JSON 불러오기 실패:", err));
  }, []);

  // 카테고리별 캐러셀 렌더링
  const renderCategory = (category, title) => (
    <section className="section">
      <h2>{title}</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        navigation
        grabCursor={true}
        modules={[Navigation]}
        className="animeSwiper"
      >
        {items
          .filter((item) => item.category === category)
          .slice(0, 10) // 최대 10개만 표시
          .map((item) => (
            <SwiperSlide key={item.id}>
              <div className="card">
                <img src={item.img} alt={item.title} />
                <h3>{item.title}</h3>
                <Link to={`/detail/${item.id}`}>상세보기</Link>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );

  return (
    <div className="homepage">
      {/* Hero 배너 */}
      <section className="hero">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="heroSwiper"
        >
          <SwiperSlide>
            <img src="/images/banner/demon.png" alt="배너1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/banner/SAO.png" alt="배너2" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner">Banner 3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner">Banner 4</div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* 카테고리별 캐러셀 */}
      {renderCategory("fantasy", "판타지 애니")}
      {renderCategory("romance", "로맨스 애니")}
      {renderCategory("mystery", "미스터리 애니")}

      {/* 광고 섹션 */}
      <section className="ad-section">
        <h2>광고</h2>
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="adSwiper"
        >
          <SwiperSlide>
            <div className="ad-card">광고 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ad-card">광고 2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ad-card">광고 3</div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default HomePage;
