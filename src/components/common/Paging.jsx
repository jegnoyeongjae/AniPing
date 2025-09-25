import './Paging.css';

export const Paging = () => {
  return (
    <div className="pagination">
      <button className="page-btn">« 처음</button>
      <button className="page-btn">‹ 이전</button>

      <div className="page-numbers">
        {[...Array(10)].map((_, idx) => (
          <button key={idx} className={`page-num ${idx === 0 ? "active" : ""}`}>
            {idx + 1}
          </button>
        ))}
      </div>

      <button className="page-btn">다음 ›</button>
      <button className="page-btn">끝 »</button>
    </div>
  );
};

