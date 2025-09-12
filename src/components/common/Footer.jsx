// Footer.js
import { Link } from "react-router-dom";
import "./Footer.css";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <img src="../../public/images/AniPing_candidate1.png" alt="애니핑" className="footerLogo" />
                </div>
                <div className="footer-section">
                    <p>서면 삼정옆 M아카데미</p>
                    <p>사업자명: 애니 애호가</p>
                    <p>푸터센터1: 원하는 디자인으로</p>
                    <p>푸터센터2: 수정 해도 되는 부분 ㅇㅇ</p>
                </div>
                <div className="footer-section footer-right">
                    <Link to='naver.com'><span>고객센터 링크 자리 1</span></Link>
                    <Link to='naver.com'><span>고객센터 링크 자리 2</span></Link>
                    <Link to='naver.com'><span>고객센터 링크 자리 3</span></Link>

              
                </div>
            </div>
        </footer>
    );
};

export default Footer;
