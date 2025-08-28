import { useRef } from "react";
import { Link } from "react-router-dom";

import './Gnb.css';

const Gnb = () => {
    const gnbRef = useRef();
    const lineRef = useRef();

    
    // e.currentTarget : 이벤트 리스너가 등록된 대상
    // e.target : 실제 이벤트가 발생하게 된 원인
    const handleMouseEnterDepth1 = (e) => {
        const submenu = e.currentTarget.querySelector('.depth2');
        const submenuHeight = submenu.offsetHeight;
        gnbRef.current.style.height = 80 + submenuHeight + 'px';
        lineRef.current.style.display = 'block';
    }

    const handleMouseLeaveGnb = () => {
        gnbRef.current.style.height = '80px';
        lineRef.current.style.display = 'none';
    }

    return (
        <div id="Gnb" ref={gnbRef}>
            <h1 className="logo">
                <Link to='/'>
                    <img src="/images/nike.png" alt="애니핑"className="logoImage"/>
                </Link>
            </h1>
            <nav className="gnb" onMouseLeave={handleMouseLeaveGnb}>
                <ul className="depth1">
                    <li className="has2" onMouseEnter={handleMouseEnterDepth1}>
                        <Link to=''><span>애니메이션 장르</span></Link>
                        <div className="depth2">
                            <div className="depth2-inner">
                                <div className="depth2-menu">
                                    <ul>
                                        <li><Link to=''>판타지</Link></li>
                                        <li><Link to=''>로맨스</Link></li>
                                        <li><Link to=''>SF</Link></li>
                                        <li><Link to=''>일상</Link></li>
                                        <li><Link to=''>미스터리</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="has2" onMouseEnter={handleMouseEnterDepth1}>
                        <Link to=''><span>캐릭터 게시판</span></Link>
                        <div className="depth2">
                            <div className="depth2-inner">
                                <div className="depth2-menu">
                                    <ul>
                                        <li><Link to=''>나는</Link></li>
                                        <li><Link to=''>놀러 갈테니까</Link></li>
                                        <li><Link to=''>ㅅㄱ요~</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="has2" onMouseEnter={handleMouseEnterDepth1}>
                        <Link to=''><span>고객센터</span></Link>
                        <div className="depth2">
                            <div className="depth2-inner">
                                <div className="depth2-menu">
                                    <ul>
                                        <li><Link to=''>농담이고</Link></li>
                                        <li><Link to=''>모르는거나 궁금한거있음 연락 ㄱ</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="has2" onMouseEnter={handleMouseEnterDepth1}>
                        <Link to=''><span>카테고리 추가할거 있음 여기 없음 지웡</span></Link>
                        <div className="depth2">
                            <div className="depth2-inner">
                                <div className="depth2-menu">
                                    <ul>
                                        <li><Link to=''>1</Link></li>
                                        <li><Link to=''>2</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
            <span className="line" ref={lineRef}></span>
        </div>
    )
}

export default Gnb;