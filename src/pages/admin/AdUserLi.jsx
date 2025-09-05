import { useState, useEffect } from "react";
import axios from 'axios';
import { AdUserSearch, AdUserSearchList } from "../../components/admin";

import './AdUserLi.css'

const AdUserLi = () => {
    const [searchLis, setSearchLis] = useState([]); //유저 전체 리스트
    const [searchResult, setSearchResult] = useState([]); //검색 필터된 값
    const [realAdmins, setRealAdmins] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/data/userInfo.json');
            const data = response.data.userInfo;
            setSearchLis(data);
            setSearchResult(data);
            const filteredAdmin = data.filter(dat => dat.admin === true);
            setRealAdmins(filteredAdmin);
        } catch (e) {
            console.error('데이터 로드에 실패했습니다.');
        }
    };

    const handleClickDelete = (targetId) => {
        const deleteUser = searchLis.filter((data) => data.id !== targetId);
        setSearchLis(deleteUser);
        setSearchResult(deleteUser);  
    }

    const handleClickRemoveAdmin = (id) => {
        const updateAdmins = searchLis.map(searchLi =>
            searchLi.id === id ? { ...searchLi, admin: !searchLi.admin } : searchLi)
        setSearchLis(updateAdmins)
        setSearchResult(updateAdmins)
        setRealAdmins(updateAdmins.filter(updateAdmin => updateAdmin.admin === true));
    }

    return (
        <div id="AdUserLi">
            <div className="inner">
                <h2 className="userLi">사용자 목록</h2>
                <ul className="serachUserLi">
                    <h4>
                        <p>순서</p>
                        <p>유저아이디</p>
                        <p>이름</p>
                        <p>이메일</p>
                        <p>가입날짜</p>
                        <p></p>
                        <p></p>
                    </h4>
                    {searchResult.map((searchLi, idx) => (
                        <AdUserSearchList
                            key={searchLi.id}
                            index={idx}
                            searchLi={searchLi}
                            handleClickDelete={handleClickDelete}
                            handleClickRemoveAdmin={handleClickRemoveAdmin}
                        />
                    ))}
                </ul>
                <AdUserSearch
                    searchLis={searchLis}
                    setSearchResult={setSearchResult}
                />
            </div>
        </div>
    )
}

export default AdUserLi;
