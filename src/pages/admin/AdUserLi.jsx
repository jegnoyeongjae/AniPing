import { AdUserSearch, AdUserSearchList } from "../../components/admin";

import './AdUserLi.css'

const AdUserLi = ({ searchLis, setSearchLis }) => {
    const handleClickDelete = (targetId) => {
        const deleteUser = searchLis.filter((data) => data.id !== targetId);
        setSearchLis(deleteUser);
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
                    </h4>
                    {searchLis.map((searchLi, idx) => <AdUserSearchList key={searchLi.id} index={idx} searchLi={searchLi} handleClickDelete={handleClickDelete} />)}
                </ul>
                <AdUserSearch />
            </div>
        </div>
    )
}

export default AdUserLi;