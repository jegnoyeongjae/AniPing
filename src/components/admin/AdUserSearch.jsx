import { useState } from "react";

import './AdUserSearch.css';

const AdUserSearch = () => {
    const [text, setText] = useState('');

    const handleChangeText = e => setText(e.target.value);

    const handleClickSearch = () => {
        if (!text.trim()) {
            alert('유저아이디를 입력해주세요.');
            return
        }
    }

    return (
        <div id="AdUserSearch">
            <div className="inner">
                <input
                    type="text"
                    placeholder="유저아이디를 입력하세요"
                    value={text}
                    onChange={handleChangeText}
                />
                <button onClick={handleClickSearch}>
                    검색하기
                </button>
            </div>
        </div>
    )
}

export default AdUserSearch;