import { useState } from "react";

const AdCSAskLi = ({ userAsk, idx, ansTitles, setAnsTitles, anses, setAnses }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [ansTitleInput, setAnsTitleInput] = useState('');
    const [ansInput, setAnsInput] = useState('');

    const visibleContent = () => {
        setIsVisible(!isVisible);
    };

    const handleChangeAnsTitle = (e) => {
        setAnsTitleInput(e.target.value)
        const changeAnsTitle = ansTitles.map(ansTitle =>
            ansTitle.id === id? {...ansTitle, answerTitle: ansTitleInput} : ansTitle)
            setAnsTitles(changeAnsTitle);
    }

    const handleChangeAns = (e) => {
        setAnsInput(e.target.value)
        const changeAns = anses.map(ans =>
            ans.id === id? {...ans, answer: ansInput} : ans)
            setAnsInput(changeAns);

    }

    return (
        <li className="AdCSAskLi" >
            <div className="inner">
                <div className="mustSee" onClick={visibleContent}>
                    <p>{idx + 1}</p>
                    <p>{userAsk.title}</p>
                    <p>{userAsk.userId}</p>
                    <p>{userAsk.askDate}</p>
                    <p>{userAsk.isDone ? '처리완료' : '미완료'}</p>
                </div>
                {isVisible && (
                    <div className="visibleSee">
                        <div>
                            <p>문의</p>
                            <div>
                                <div>
                                    <p>글쓴이</p>
                                    <p>{userAsk.userId}</p>
                                </div>
                                <div>
                                    <p>제목</p>
                                    <p>{userAsk.title}</p>
                                </div>
                                <div>
                                    <p>내용</p>
                                    <p>{userAsk.content}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>답변</p>
                            <div>
                                <div>
                                    <p>답변 제목</p>
                                    <p>
                                        <input
                                            type="text"
                                            placeholder="제목을 입력하세요."
                                            value={ansTitleInput}
                                            onChange={handleChangeAnsTitle}
                                        />
                                    </p>
                                </div>
                                <div>
                                    <p>답변 내용</p>
                                    <p>
                                        <input
                                            type="text"
                                            placeholder="내용을 입력하세요"
                                            value={ansInput}
                                            onChange={handleChangeAns}
                                        />
                                    </p>
                                </div>
                            </div>
                            <button>저장하기</button>
                        </div>
                    </div>
                )}
            </div>
        </li>
    )
}

export default AdCSAskLi;