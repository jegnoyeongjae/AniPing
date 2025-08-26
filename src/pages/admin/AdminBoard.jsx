import './AdminBoard.css';

const AdminBoard = () => {

    return (
        <div id="AdminBoard">
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
                    <ul>
                        <li className="waitAsk">답변대기 문의 <span className="waiteAskNum">0</span></li>
                        <li className="waitReport">신고받은 댓글 관리 <span className="waitReportNum">0</span></li>
                    </ul>
                </div>
                <div className="secondRight">
                    <div className="secondRightTop">
                        <p>공지사항</p>
                        <p>전체보기</p>
                    </div>
                    <p></p>
                </div>
            </div>
            <div className='thirdLine'>
                사용가이드
            </div>
        </div>
    )
}

export default AdminBoard;