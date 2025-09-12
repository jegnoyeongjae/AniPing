// src/pages/HomePage.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
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
                <Link to={`/detail/${item.id}`}>
                  <img src={item.img} alt={item.title} />
                  <h3>{item.title}</h3>
                </Link>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
  const navigate = useNavigate();

  return (
    <div className="homePageWrapper">
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
              <img
                src="/images/banner/SAO.png" alt="배너1"
                onClick={() => navigate("/detail/1")}
                style={{ cursor: "pointer" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/banner/demon.png" alt="배너2"
                onClick={() => navigate("/detail/2")}
                style={{ cursor: "pointer" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/banner/attack2.png" alt="배너3"
                onClick={() => navigate("/detail/8")}
                style={{ cursor: "pointer" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/banner/oshi1.png" alt="배너3"
                onClick={() => navigate("/detail/48")}
                style={{ cursor: "pointer" }} />
            </SwiperSlide>
          </Swiper>
        </section>

        {/* 카테고리별 캐러셀 */}
        {renderCategory("fantasy", "판타지 애니")}
        {renderCategory("romance", "로맨스 애니")}
        {renderCategory("mystery", "미스터리 애니")}

        {/* 광고 섹션 */}
        <section className="ad-section">
          <Swiper
            spaceBetween={20}
            centeredSlides={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="adSwiper"
          >
            <SwiperSlide>
              <a
                href="https://maplestory.nexon.com/promotion/event/2025/20250607/event01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="ad-card">
                <img
                  src="/images/banner/ad/maple.png"
                  alt="광고1"
                  style={{ cursor: "pointer",height: "100%", width: "1000px", objectFit: "contain" }}
                />
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://www.worldjob.or.kr/new_index.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="ad-card">
                <img
                  src="/images/banner/ad/job.jpg"
                  alt="광고2"
                  style={{ cursor: "pointer" }}
                />
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://www.jlpt.or.kr/html/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="ad-card">
                <img
                  src="/images/banner/ad/jlpt.jpg"
                  alt="광고3"
                  style={{ cursor: "pointer"}}
                />
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default HomePage;