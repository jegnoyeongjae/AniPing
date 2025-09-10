import { useState } from "react";

import './AdCSAskLi.css';

const AdCSAskLi = ({ userAsks, userAsk, idx, setUserAsks }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [ansTitleInput, setAnsTitleInput] = useState('');
    const [ansInput, setAnsInput] = useState('');

    const visibleContent = () => {
        setIsVisible(!isVisible);
    };

    const handleChangeAnsTitle = (e) => {
        setAnsTitleInput(e.target.value)
    }

    const handleChangeAns = (e) => {
        setAnsInput(e.target.value)
    }

    const handleSave = () => {
        const changeUserAsk = userAsks.map(userA =>
            userA.id === userAsk.id
                ? { ...userA, answerTitle: ansTitleInput, answer: ansInput, isDone: true }
                : userA
        )
        setUserAsks(changeUserAsk)
        alert('답변이 저장되었습니다.');
    }


    return (
        <li className="AdCSAskLi" >
            <div className="inners">
                <div>
                    <div className="mustSee" onClick={visibleContent}>
                        <p>{idx + 1}</p>
                        <p>{userAsk.title}</p>
                        <p>{userAsk.userId}</p>
                        <p>{userAsk.askDate}</p>
                        <p>{userAsk.isDone ? '처리완료' : '미완료'}</p>
                    </div>
                </div>
                <div className="visibleSe">
                    {isVisible && (
                        <div className="visibleSee">
                            <div className="visibleAsk">
                                <h3>문의 내용</h3>
                                <p>{userAsk.content}</p>
                            </div>
                            <div className="visibltAns">
                                {userAsk.isDone
                                    ? (
                                        <div>
                                            <div className="ansTitle">
                                                <h3>답변 제목</h3>
                                                <p>{userAsk.answerTitle}</p>
                                            </div>
                                            <div className="ansText">
                                                <h3>답변 내용</h3>
                                                <p>{userAsk.answer}</p>
                                            </div>
                                        </div>
                                    )
                                    : (
                                        <div>
                                            <div className="ansTitle">
                                                <h3>답변 제목</h3>
                                                <p>
                                                    <input
                                                        type="text"
                                                        placeholder="제목을 입력하세요."
                                                        value={ansTitleInput}
                                                        onChange={handleChangeAnsTitle}
                                                    />
                                                </p>
                                            </div>
                                            <div className="ansText">
                                                <h3>답변 내용</h3>
                                                <p>
                                                    <input
                                                        type="text"
                                                        placeholder="내용을 입력하세요"
                                                        value={ansInput}
                                                        onChange={handleChangeAns}
                                                    />
                                                </p>
                                            </div>
                                            <button onClick={handleSave}>저장하기</button>
                                        </div>
                                    )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </li>
    )
}

export default AdCSAskLi;