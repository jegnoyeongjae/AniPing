import { useState, useEffect } from "react";
import axios from "axios";
import { AdminSettingLi } from "../../components/admin";

import './AdminSetting.css';

const AdminSetting = () => {
    const [takeAdmins, setTakeAdmins] = useState([]);
    const [realAdmins, setRealAdmins] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/data/userInfo.json');
            const data = response.data.userInfo;
            setTakeAdmins(data);
            const filteredAdmin = data.filter(dat => dat.admin === true);
            setRealAdmins(filteredAdmin);
        } catch (e) {
            console.error('데이터 로드에 실패했습니다.');
        }
    }

    const handleClickRemoveAdmin = (id) => {
        const updateAdmins = takeAdmins.map(takeAdmin =>
            takeAdmin.id === id ? { ...takeAdmin, admin: !takeAdmin.admin } : takeAdmin)
        setTakeAdmins(updateAdmins)
        setRealAdmins(updateAdmins.filter(updateAdmin => updateAdmin.admin === true));
    }

    return (
        <div id="AdminSetting">
            <div className="inner">
                <h2 className="adminLi">관리자 목록</h2>
                <ul className="seeAdminLi">
                    <h4>
                        <p>순서</p>
                        <p>유저아이디</p>
                        <p>이름</p>
                        <p>이메일</p>
                        <p>가입날짜</p>
                        <p></p>
                    </h4>
                    {realAdmins.map((realAdmin, idx) => (
                        <AdminSettingLi
                            key={realAdmin.id}
                            index={idx}
                            realAdmin={realAdmin}
                            handleClickRemoveAdmin={handleClickRemoveAdmin}
                        />
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default AdminSetting;