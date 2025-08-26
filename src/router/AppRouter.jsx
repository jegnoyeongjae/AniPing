import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const AppRoute = () => {
  const [headerProps, setHeaderProps] = useState({});

  console.log('라우터 페이지 헤더 프롭', headerProps);

  return (
    <div>
      <Header {...headerProps} />
      <Outlet context={{ setHeaderProps }} />
      <Footer/>
    </div>
  );
};

export default AppRoute;
