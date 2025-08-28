import { AdUserSearch, AdUserSearchList } from "../../components/admin";

const AdUserLi = ({searchLis}) => {
    return (
        <div id="AdUserLi">
            <p>사용자 목록</p>
            <div className="userLiTop">
                <AdUserSearch />
                <ul>
                    {searchLis.map(searchLi => <AdUserSearchList key={searchLi.id} searchLi={searchLi} />)}
                </ul>
            </div>
        </div>
    )
}

export default AdUserLi;