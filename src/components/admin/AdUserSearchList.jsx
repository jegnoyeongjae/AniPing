import './AdUserSearchList.css';

const AdUserSearchList = ({ searchLi, index, handleClickDelete}) => {
    const onDelete = () => {
        if (confirm('삭제하시겠습니까?')) {
            handleClickDelete(searchLi.id)
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
                <p><button onClick={onDelete}>삭제하기</button></p>
            </div>
        </li>
    )
}

export default AdUserSearchList;