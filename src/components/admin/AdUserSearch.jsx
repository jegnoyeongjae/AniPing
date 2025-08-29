import { useState, useRef } from "react";
import './AdUserSearch.css';

const AdUserSearch = ({ searchLis, setFilterDatas }) => {

    const [userInput, setUserInput] = useState('');

    const handleSearchChange = (e) => {
        setUserInput(e.target.value);
    }

    const filteredText = searchLis.filter(searchL => {
        console.log('flter안의 어퍼 문자열',userInput.toLowerCase());
        console.log('flter안의 서치리스트',searchL);
        console.log('flter안의 서치리스트 로어케이스',searchL.userId.toString());
        searchL.userId.toString().toLowerCase().includes(userInput.toLowerCase())
    }
    )

    const handleClickSearch = () => {
        if (!userInput.trim()) {
            console.log(userInput, filteredText);
            alert('유저아이디를 입력해주세요.');
            return;
        } else {
            setFilterDatas(filteredText);
            console.log(userInput, filteredText);
            return;
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