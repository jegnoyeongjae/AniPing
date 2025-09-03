import { useState } from "react";
import './AdUserSearch.css';

const AdUserSearch = ({ searchLis, setSearchResult }) => {
    const [userInput, setUserInput] = useState('');

    const handleSearchChange = (e) => {
        setUserInput(e.target.value);
    }

    const handleClickSearch = () => {
        if (!userInput.trim()) {
            setSearchResult(searchLis);
        } else {
            const filteredText = searchLis.filter(searchL =>
                searchL.userId.toLowerCase().includes(userInput.toLowerCase())
            );
            setSearchResult(filteredText);
        }
    }

    return (
        <div id="AdUserSearch">
            <div className="inner">
                <input
                    type="text"
                    placeholder="유저아이디를 입력하세요"
                    value={userInput}
                    onChange={handleSearchChange}
                />
                <button onClick={handleClickSearch}>
                    검색하기
                </button>
            </div>
        </div>
    )
}

export default AdUserSearch;
