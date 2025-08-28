import './AdminBoard.css';

const AdminBoard = () => {

    return (
        <div id="AdminBoard">
            <div className='inner'>
                <ul className="mainBoard">
                    <li className='mainBigList'>
                        <div className='boardTitle'>
                            <h2>사용자 관리</h2>
                            <p>바로가기</p>
                        </div>
                        <div className='boardList'>
                            <p>신규 가입자</p>
                            <p>운영진 설정</p>
                        </div>
                    </li>
                    <li className='mainBigList'>
                        <div className='boardTitle'>
                            <h2>애니메이션 관리</h2>
                            <p>바로가기</p>
                        </div>
                        <div className='boardList'>
                            <p>애니메이션 리스트</p>
                            <p>태그 관리</p>
                        </div>
                    </li>
                    <li className='mainBigList'>
                        <div className='boardTitle'>
                            <h2>캐릭터 관리</h2>
                            <p>바로가기</p>
                        </div>
                        <div className='boardList'>
                            <p>캐릭터 관리</p>
                            <p>성우 관리</p>
                        </div>
                    </li>
                    <li className='mainBigList'>
                        <div className='boardTitle'>
                            <h2>고객센터 관리</h2>
                            <p>바로가기</p>
                        </div>
                        <div className='boardList'>
                            <p>1 : 1 문의 관리</p>
                            <p>자주 물어보는 질문</p>
                            <p>문의 내역 리스트</p>
                        </div>
                    </li>
                </ul>
                <div className='secondLine'>
                    <div className="secondLeft">
                        <h2 className="todayTodo">오늘의 할 일</h2>
                        <ul className='todayTodoLi'>
                            <li className="waitAsk">
                                <p>답변대기 문의</p>
                                <p className="waiteAskNum">0</p>
                            </li>
                            <li className="waitReport">
                                <p>신고받은 댓글 관리</p>
                                <p className="waitReportNum">0</p>
                            </li>
                        </ul>
                    </div>
                    <div className="secondRight">
                        <div className="secondRightTop">
                            <div className='secondRightTopLi'>
                                <div className='secondRightTopTitle'>
                                    <h2>공지사항</h2>
                                    <p>더보기</p>
                                </div>
                                <div className='secondRightTopData'>
                                    <p>a</p>
                                    <p>a</p>
                                    <p>a</p>
                                </div>
                            </div>
                            <div className='secondRightTopLi'>
                                <div className='secondRightTopTitle'>
                                    <h2>전체보기</h2>
                                    <p>더보기</p>
                                </div>
                                <div className='secondRightTopData'>
                                    <p>a</p>
                                    <p>a</p>
                                    <p>a</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='thirdLine'>
                    사용가이드
                </div>
            </div>
        </div>
    )
}

export default AdminBoard;