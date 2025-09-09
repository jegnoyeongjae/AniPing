

import './AdUserSearchList.css';

const AdUserSearchList = ({ searchLi, index, handleClickDelete, handleClickRemoveAdmin}) => {

    const onDelete = () => {
        if (confirm('삭제하시겠습니까?')) {
            handleClickDelete(searchLi.id)
        }
    }

    const onChangeAdmin = () => {
        if(!searchLi.admin){
            if(confirm('변경하시겠습니까?')){
                handleClickRemoveAdmin(searchLi.id);
            }
        }
    }

    return (
        <li id="AdUserSearchList">
            <div className='searchList'>
                <p>{index + 1}</p>
                <p>{searchLi.userId}</p>
                <p>{searchLi.name}</p>
                <p>{searchLi.email}</p>
                <p>{searchLi.startDate}</p>
                <p>
                    {searchLi.admin
                        ? '운영자' 
                        : <button onClick={onChangeAdmin}>운영자 권한 부여</button>}
                </p>
                <p><button onClick={onDelete}>삭제하기</button></p>
            </div>
        </li>
    )
}

export default AdUserSearchList;