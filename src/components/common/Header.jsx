import { Link } from "react-router-dom";
import './Header.css';
import Gnb from "./Gnb";
import { useState } from "react";

const Header = ({ headerProps }) => {

    // 로그인 유무에 따른 header의 우측 버튼 관리 변수
    const [isLogin, setIsLogin] = useState(false)

    const [isOpenSearch, setIsOpenSearch] = useState(false);

    const handleClickSearchBtn = () => {
        setIsOpenSearch(!isOpenSearch);
    }

    return (
        <header id="Header">
            {/* header의 accodion 컴포넌트 */}
            <Gnb />
            <div className="utills">
                {isLogin ?
                    <ul>
                        <li><Link to=''>MyPage</Link></li>
                        <li><Link to=''>LogOut</Link></li>
                    </ul> :
                    <ul>
                        <li><Link to='/login'>LOGIN</Link></li>
                        <li><Link to=''>JOIN</Link></li>
                    </ul>}
                <li className="open-search">
                    <button onClick={handleClickSearchBtn}>
                        {
                            isOpenSearch
                                ? <img src="/images/icon_close.png" alt="검색창 닫기" />
                                : <img src="/images/icon_search.png" alt="검색창 열기" />
                        }
                    </button>
                </li>
            </div>
        </header>
    )
}

export default Header;