import { Link } from 'react-router-dom';
import { useState } from 'react';

import './AdminHeader.css';

const AdminHeader = () => {
    const [showingUserManage, setShowingUserManage] = useState(false);
    const onClickUserManage = () => setShowingUserManage((prev) => !prev);

    const [showingAniManage, setShowingAniManage] = useState(false);
    const onClickAniManage = () => setShowingAniManage((prev) => !prev);

    const [showingCharManage, setShowingCharManage] = useState(false);
    const onClickCharManage = () => setShowingCharManage((prev) => !prev);

    const [showingAskManage, setshowingAskManage] = useState(false);
    const onClickAskManage = () => setshowingAskManage((prev) => !prev);


    return (
        <div id="AdminHeader">
            <div className='inner'>
                <div className='adminInfo'>
                    <p className='adminPhoto'>photo</p>
                    <p className='adminName'>name</p>
                    <p className='adminEmail'>email</p>
                </div>
                <ul className='admincate'>
                    <li>
                        <ul className='headerTitle'>
                            <li className='bigTitle'><Link to="/AdminBoard">사이트 관리</Link></li>
                            <li className='subTitle'><Link to="/AdminBoard"> - 대시보드</Link></li>
                            <li className='userLi'>
                                <div className='userTitle'>
                                    <p className='subTitle'><Link to=""> - 사용자</Link></p>
                                    <div onClick={onClickUserManage}>{showingUserManage ? "∧" : "∨"}</div>
                                </div>
                                <div onClick={onClickUserManage}>
                                    {showingUserManage
                                        ?
                                        <ul className='userLiName'>
                                            <li><Link to="">- 사용자 목록</Link></li>
                                            <li><Link to="">- 개인 공지 보내기</Link></li>
                                            <li><Link to="">- 운영진 설정</Link></li>
                                        </ul>
                                        : null}
                                </div>
                            </li>
                            <li className='userLi'>
                                <div className='userTitle'>
                                    <p className='subTitle'><Link to=""> - 애니메이션</Link></p>
                                    <div onClick={onClickAniManage}>{showingAniManage ? "∧" : "∨"}</div>
                                </div>
                                <div onClick={onClickAniManage}>
                                    {showingAniManage
                                        ?
                                        <ul className='userLiName'>
                                            <li><Link to="">- 애니메이션 관리</Link></li>
                                            <li><Link to="">- 애니메이션 태그 관리</Link></li>
                                        </ul>
                                        : null}
                                </div>
                            </li>
                            <li className='userLi'>
                                <div className='userTitle'>
                                    <p className='subTitle'><Link to=""> - 캐릭터 게시판</Link></p>
                                    <div onClick={onClickCharManage}>{showingCharManage ? "∧" : "∨"}</div>
                                </div>
                                <div onClick={onClickCharManage}>
                                    {showingCharManage
                                        ?
                                        <ul className='userLiName'>
                                            <li><Link to="">- 캐릭터 게시판</Link></li>
                                            <li><Link to="">- 캐릭터 명대사</Link></li>
                                            <li><Link to="">- 성우 관리</Link></li>
                                        </ul>
                                        : null}
                                </div>
                            </li>
                            <li className='subTitle'><Link to=""> - 댓글 신고</Link></li>
                            <li className='subTitle'><Link to=""> - 공지사항</Link></li>
                        </ul>
                    </li>
                    <li>
                        <ul className='headerTitle'>
                            <li className='userLi'>
                                <div className='userTitle'>
                                    <div className='bigTitle'><Link to="">고객센터 관리</Link></div>
                                    <div onClick={onClickAskManage}>{showingAskManage ? "∧" : "∨"}</div>
                                </div>
                                <div onClick={onClickAskManage}>
                                    {showingAskManage
                                        ?
                                        <ul className='userLiName'>
                                            <li><Link to="">- 1 : 1 문의</Link></li>
                                            <li><Link to="">- 자주 물어보는 질문</Link></li>
                                            <li><Link to="">- 문의 내역</Link></li>
                                        </ul>
                                        : null}
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className='headerTitle'>
                        <p className='bigTitle'>about 관리자</p>
                    </li>
                </ul>
                <div className='goToMain'><Link to=''>나가기</Link></div>
            </div>
        </div>
    )
}

export default AdminHeader;