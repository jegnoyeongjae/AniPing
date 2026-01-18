import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Star, Play, Sparkles, Wind, ArrowRight, Zap } from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HomePage.css";

const HomePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Mock data for the light theme
    const mockData = [
      { id: 1, title: "소드 아트 온라인", category: "fantasy", img: "https://images.unsplash.com/photo-1578632738981-433065786133?auto=format&fit=crop&q=80&w=600", score: 8.5 },
      { id: 2, title: "귀멸의 칼날", category: "fantasy", img: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&q=80&w=600", score: 9.8 },
      { id: 3, title: "진격의 거인", category: "fantasy", img: "https://images.unsplash.com/photo-1541562232579-512a21360020?auto=format&fit=crop&q=80&w=600", score: 9.9 },
      { id: 8, title: "진격의 거인 파이널", category: "fantasy", img: "https://images.unsplash.com/photo-1528460033278-a6ba57020470?auto=format&fit=crop&q=80&w=600", score: 9.5 },
      { id: 10, title: "헌터x헌터", category: "fantasy", img: "https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=600", score: 9.2 },
      { id: 4, title: "너의 이름은", category: "romance", img: "https://images.unsplash.com/photo-1607604276483-4efdd6d4adbb?auto=format&fit=crop&q=80&w=600", score: 9.4 },
      { id: 5, title: "날씨의 아이", category: "romance", img: "https://images.unsplash.com/photo-1513271922711-5897cd0a9d4d?auto=format&fit=crop&q=80&w=600", score: 8.9 },
      { id: 48, title: "최애의 아이", category: "romance", img: "https://images.unsplash.com/photo-1533481406255-7a6b13e52830?auto=format&fit=crop&q=80&w=600", score: 9.6 },
      { id: 6, title: "데스노트", category: "mystery", img: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?auto=format&fit=crop&q=80&w=600", score: 9.6 },
      { id: 7, title: "명탐정 코난", category: "mystery", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600", score: 8.2 },
    ];
    setItems(mockData);
  }, []);

  const renderCategory = (category, title) => (
    <section className="my-32 px-6 md:px-12 relative">
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <div className="w-1.5 h-10 bg-primary rounded-full"></div>
          <div>
            <h2 className="text-3xl font-black text-slate-800 tracking-tight flex items-center gap-2">
              {title}
              <Zap className="text-yellow-400 fill-yellow-400" size={20} />
            </h2>
            <p className="text-sm font-medium text-slate-400 tracking-wide uppercase">Weekly Best Picks</p>
          </div>
        </div>
        <Link to={`/category/${category}`} className="group flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-all px-6 py-2 rounded-full border border-blue-100 hover:border-accent">
          View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      <Swiper
        spaceBetween={28}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.3 },
          1024: { slidesPerView: 5 },
        }}
        navigation
        grabCursor={true}
        modules={[Navigation]}
        className="pb-12 !overflow-visible"
      >
        {items
          .filter((item) => item.category === category)
          .slice(0, 10)
          .map((item) => (
            <SwiperSlide key={item.id}>
              <div className="anime-card rounded-[2rem] overflow-hidden border border-blue-50/50">
                <Link to={`/detail/${item.id}`}>
                  <div className="relative aspect-[3/4.2] overflow-hidden">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-black text-primary shadow-sm">
                      <Star size={12} fill="currentColor" />
                      {item.score}
                    </div>
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500">
                        <Play className="text-primary ml-1" size={24} fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-base font-bold text-slate-800 mb-2 truncate group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                      <span>Anime</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                      <span>HD Quality</span>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      
      <main className="pt-20">
        <section className="px-6 md:px-12 pt-10">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="h-[450px] md:h-[750px] rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(125,211,252,0.3)] overflow-hidden border-[12px] border-white"
          >
            <SwiperSlide>
                <div className="relative w-full h-full group cursor-pointer">
                    <img src="/images/banner/SAO.png" alt="배너1" className="w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-105" onError={(e) => { (e.target).src = 'https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=1200' }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
                    <div className="absolute bottom-20 left-16 text-white max-w-xl">
                        <h2 className="text-6xl font-black mb-6 text-glow leading-none">SWORD ART<br/>ONLINE</h2>
                        <p className="text-xl font-medium opacity-90 mb-8">현실을 넘어선 가상 세계에서의 사투.</p>
                        <button className="bg-white text-primary px-12 py-5 rounded-full font-black uppercase tracking-widest shadow-2xl hover:bg-blue-50 transition-all">Watch Now</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative w-full h-full group cursor-pointer">
                    <img src="/images/banner/demon.png" alt="배너2" className="w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-105" onError={(e) => { (e.target).src = 'https://images.unsplash.com/photo-1528460033278-a6ba57020470?auto=format&fit=crop&q=80&w=1200' }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
                    <div className="absolute bottom-20 left-16 text-white max-w-xl">
                        <h2 className="text-6xl font-black mb-6 text-glow leading-none">DEMON<br/>SLAYER</h2>
                        <p className="text-xl font-medium opacity-90 mb-8">가족을 위해 칼을 든 소년의 이야기.</p>
                        <button className="bg-white text-primary px-12 py-5 rounded-full font-black uppercase tracking-widest shadow-2xl hover:bg-blue-50 transition-all">Watch Now</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative w-full h-full group cursor-pointer">
                    <img src="/images/banner/oshi1.png" alt="배너4" className="w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-105" onError={(e) => { (e.target).src = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200' }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
                    <div className="absolute bottom-20 left-16 text-white max-w-xl">
                        <h2 className="text-6xl font-black mb-6 text-glow leading-none">OSHI NO<br/>KO</h2>
                        <p className="text-xl font-medium opacity-90 mb-8">아이돌의 빛과 그림자.</p>
                        <button className="bg-white text-primary px-12 py-5 rounded-full font-black uppercase tracking-widest shadow-2xl hover:bg-blue-50 transition-all">Watch Now</button>
                    </div>
                </div>
            </SwiperSlide>
          </Swiper>
        </section>

        <div className="max-w-[1440px] mx-auto">
          {renderCategory("fantasy", "Epic Fantasy")}
          {renderCategory("romance", "Youthful Romance")}
          {renderCategory("mystery", "Crime & Mystery")}
        </div>

        {/* Ad Section Re-imagined */}
        <section className="my-32 px-6 md:px-12">
            <div className="bg-blue-50/50 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full refreshing-gradient opacity-10 rounded-l-full"></div>
                <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <h3 className="text-4xl md:text-5xl font-black text-slate-800 leading-tight">SPECIAL<br/><span className="text-primary underline decoration-primary/20">PARTNERSHIP</span></h3>
                        <p className="text-lg font-medium text-slate-500 max-w-md">애니핑이 제안하는 이번 주의 특별한 소식을 만나보세요.</p>
                    </div>
                    <div className="flex-[2] w-full">
                        <Swiper
                            spaceBetween={20}
                            centeredSlides={true}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            modules={[Autoplay]}
                            className="rounded-3xl shadow-2xl h-48 md:h-64 border-8 border-white"
                        >
                            <SwiperSlide>
                                <a href="https://maplestory.nexon.com/promotion/event/2025/20250607/event01" target="_blank" rel="noopener noreferrer" className="block w-full h-full bg-white group">
                                    <div className="flex items-center justify-center h-full p-8 transition-transform group-hover:scale-95">
                                        <img src="/images/banner/ad/maple2.png" alt="광고1" className="max-h-full w-auto object-contain" onError={(e) => { (e.target).src = 'https://api.iconify.design/logos:nexon.svg' }} />
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="https://www.worldjob.or.kr/new_index.do" target="_blank" rel="noopener noreferrer" className="block w-full h-full bg-white group">
                                    <div className="flex items-center justify-center h-full p-8 transition-transform group-hover:scale-95">
                                        <img src="/images/banner/ad/job2.jpg" alt="광고2" className="max-h-full w-auto object-contain" onError={(e) => { (e.target).src = 'https://api.iconify.design/logos:google.svg' }} />
                                    </div>
                                </a>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>

        {/* Refreshing CTA */}
        <section className="my-40 mx-6 md:mx-12 py-32 refreshing-gradient rounded-[4rem] text-center relative overflow-hidden shadow-[0_50px_100px_-30px_rgba(125,211,252,0.5)]">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-10 right-20 text-white float-slow opacity-40"><Sparkles size={120} /></div>
            <div className="absolute bottom-10 left-20 text-white float-slow opacity-40" style={{animationDelay: '2s'}}><Wind size={80} /></div>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-10 relative z-10 px-6">
            <h2 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter drop-shadow-2xl">
              DIVE INTO THE <br/> <span className="text-blue-50/90 underline decoration-white/40">BLUE SKY.</span>
            </h2>
            <p className="text-white/90 text-xl md:text-2xl font-bold max-w-xl mx-auto tracking-tight">
              애니핑은 가장 맑고 청량한 감성을 전달합니다.<br/>
              지금 멤버십에 가입하고 푸른 감동을 시작하세요.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="EMAIL@ANIPING.AIR" 
                className="w-full px-10 py-5 rounded-full bg-white/20 border border-white/40 focus:outline-none focus:bg-white focus:text-slate-800 placeholder:text-white/70 transition-all font-bold text-sm backdrop-blur-md shadow-2xl"
              />
              <button className="w-full md:w-auto px-12 py-5 bg-white text-primary rounded-full font-black uppercase tracking-widest shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] hover:scale-105 transition-all text-sm">
                JOIN NOW
              </button>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default HomePage;
