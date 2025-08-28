// src/pages/HomePage.jsx
import { Link } from "react-router-dom";
import "./HomePage.css";
import { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HomePage = () => {
  const [items, setItem] = useState([]);
  useEffect(() => {
    fetch("/data/animeData.json")
      .then(res => res.json())
      .then(data => setItem(data))
      .catch(err => console.error("JSON불러오기 실패:", err));
  }, []);


  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src="/images/demon.png" /></SwiperSlide>
          <SwiperSlide><img src="/images/SAO.png" /></SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
        </Swiper>
      </section>


      {/* 추천 섹션 */}
      <section className="section">
        <h2>판타지 애니</h2>
        <Swiper
          spaceBetween={20}             // 카드 사이 간격
          slidesPerView={4}             // 한 화면에 보이는 카드 수
          slidesPerGroup={1}            // 한 번 이동 시 카드 1개씩
          navigation={true}             // 좌우 화살표
          modules={[Navigation]}        // 화살표 모듈
          className="fantasySwiper"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="card">
                <h3>{item.title}</h3>
                <p>재생시간: {item.duration}초</p>
                <p>{item.isHD ? "HD" : "SD"}</p>
                <Link to={`/detail/${item.id}`}>상세보기</Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="section">
        <h2>로맨스 애니</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          slidesPerGroup={1}
          navigation={true}
          modules={[Navigation]}
          className="animeSwiper"
          breakpoints={{
            320: { slidesPerView: 1, slidesPerGroup: 1 },
            768: { slidesPerView: 2, slidesPerGroup: 1 },
            1024: { slidesPerView: 3, slidesPerGroup: 1 },
            1440: { slidesPerView: 4, slidesPerGroup: 1 },
          }}
        >
          {items.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="card">
                <h3>{item.title} (로맨스)</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="section">
        <h2>미스터리 애니</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          slidesPerGroup={1}
          navigation={true}
          modules={[Navigation]}
          className="animeSwiper"
          breakpoints={{
            320: { slidesPerView: 1, slidesPerGroup: 1 },
            768: { slidesPerView: 2, slidesPerGroup: 1 },
            1024: { slidesPerView: 3, slidesPerGroup: 1 },
            1440: { slidesPerView: 4, slidesPerGroup: 1 },
          }}
        >
          {items.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="card">
                <h3>{item.title} (미스터리)</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>


      {/*광고 캐러셀 */}
      <section className="ad-section">
        <h2>광고</h2>
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
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
