import { useNavigate } from "react-router-dom";

const AdminChaFLLi = ({chaFl}) => {
    const navigate = useNavigate();

    const handleEdClick = () => {
        navigate(`/AdCha/${chaFl.id}`);
    }

    return(
        <li id="AdminChaFLLi">
            <div>
                <p><img src={chaFl.image} alt={chaFl.title}/></p>
                <p>{chaFl.title}</p>
            </div>
            <p>{chaFl.content}</p>
            <button onClick={handleEdClick}>수정하기</button>
        </li>
    )
}

export default AdminChaFLLi;