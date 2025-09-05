import { useEffect } from 'react';
import './AdminSettingLi.css';

const AdminSettingLi = ({realAdmin, index, handleClickRemoveAdmin }) => {

    const onDeleteAdmin = () => {
        if(confirm('해제하시겠습니까?')){
            handleClickRemoveAdmin(realAdmin.id)
        }
    }

    return(
        <li id="AdminSettingLi">
            <div className="settingList">
                <p>{index + 1}</p>
                <p>{realAdmin.userId}</p>
                <p>{realAdmin.name}</p>
                <p>{realAdmin.email}</p>
                <p>{realAdmin.startDate}</p>
                <p><button onClick={onDeleteAdmin}>운영자 해제</button></p>
            </div>
        </li>
    )
}

export default AdminSettingLi;