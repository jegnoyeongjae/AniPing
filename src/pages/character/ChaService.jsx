import { useState, useEffect } from 'react';
import ChaDirect from './ChaDirect';
import ChaHistory from './ChaHistory';
import ChaQuestions from './ChaQuestions';

import './ChaService.css';

const ChaService = () => {
  const [inquiries, setInquiries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredInquiries, setFilteredInquiries] = useState(inquiries);
  const [active, setActive] = useState('questions');

  useEffect(() => {
    const lowercasedQuery = searchTerm.toLowerCase();
    const results = inquiries.filter(
      (item) =>
        item.title.toLowerCase().includes(lowercasedQuery) ||
        item.content.toLowerCase().includes(lowercasedQuery) ||
        item.status.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredInquiries(results);
  }, [inquiries, searchTerm]);

  const addInquiry = (newInquiry) => {
    setInquiries((prevInquiries) => [
      ...prevInquiries,
      {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        status: '접수 완료',
        ...newInquiry,
      },
    ]);
    setActive('history');
  };

  const handleSearch = () => {
    setActive('history');
  };

  const renderContent = () => {
    if (active === 'questions') {
      return <ChaQuestions />;
    } else if (active === 'direct') {
      return <ChaDirect onAddInquiry={addInquiry} setActive={setActive} />;
    } else if (active === 'history') {
      return <ChaHistory history={filteredInquiries} />;
    }
  };
  return (
    <div className="ChaService">
      <h2>고객센터</h2>
      <div className="search">
        <input
          type="text"
          placeholder="질문을 입력해주세요."
          className="searchInput"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="searchBtn" onClick={handleSearch}>
          search
        </button>
      </div>
      <div className="qna">
        <button onClick={() => setActive('questions')}>자주 묻는 질문</button>
        <button onClick={() => setActive('direct')}>1:1 문의</button>
        <button onClick={() => setActive('history')}>문의 내역</button>
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
};
export default ChaService;
