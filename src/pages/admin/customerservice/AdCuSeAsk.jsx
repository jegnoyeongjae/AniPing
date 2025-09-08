import { useState, useEffect } from "react";
import axios from "axios";
import { AdCSAskLi } from "../../../components/admin/customerservice";

import './AdCuSeAsk.css';

const AdCuSeAsk = () => {
    const [userAsks, setUserAsks] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get('/data/userAsk.json');
            const data = response.data.userAsk;
            setUserAsks(data);
        } catch (e) {
            console.error('데이터 로드에 실패했습니다.');
        }
    }


    return (
        <div id="AdCuSeAsk">
            <div className="inner">
                <ul className="askUl">
                    <div className="askTitle">
                        <h2></h2>
                        <h2>제목</h2>
                        <h2>글쓴이</h2>
                        <h2>문의일자</h2>
                        <h2>처리상태</h2>
                    </div>
                    <div>
                        {userAsks.map((userAsk, idx) => (
                            <AdCSAskLi
                                key={userAsk.id}
                                userAsks={userAsks}
                                userAsk={userAsk}
                                idx={idx}
                                setUserAsks={setUserAsks}
                            />
                        ))}
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default AdCuSeAsk;
