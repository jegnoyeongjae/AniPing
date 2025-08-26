import { useState } from 'react';
import './ChaQuestions.css';

const ChaQuestions = () => {
  const [answer, setAnswer] = useState(null);
  const questions = [
    {
      id: 'q1',
      title: '가입한 아이디를 모르겠네요.. 어떻게 찾아야 하나요?',
      answer: '아이디 찾기를 하세요',
    },
    {
      id: 'q2',
      title: '비밀번호를 모르겠네요.. 어떻게 찾아야 하나요?',
      answer: '비밀번호 찾기를 하세요',
    },
    {
      id: 'q3',
      title: '회원탈퇴 하고싶습니다',
      answer: '하세요',
    },
    {
      id: 'q4',
      title: '여긴 무슨사이트 인가요?',
      answer: '애니 리뷰 사이트 입니다.',
    },
    {
      id: 'q5',
      title: '무료인가요??',
      answer: '넹',
    },
  ];
  const toggleAnswer = (questionId) => {
    if (answer === questionId) {
      setAnswer(null);
    } else {
      setAnswer(questionId);
    }
  };
  return (
    <div className="ChaQuestions">
      <h2>자주 묻는 질문</h2>
      <ul>
        {questions.map((q) => (
          <li key={q.id}>
            <button onClick={() => toggleAnswer(q.id)}>
              <span>{q.title}</span>
            </button>
            {answer === q.id && <p>{q.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ChaQuestions;
