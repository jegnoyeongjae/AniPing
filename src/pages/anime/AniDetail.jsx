import "./AniDetail.css"
import { AniCha,AniComment,AniInfo,AniPv,AniTag } from "../../components/anime"

const AniDetail = ()=>{
  return(
    <div className="ani-detail-container">
      <AniInfo />
      <AniCha />
      <AniPv />
      <AniTag />
      <AniComment />
    </div>
  )
}


export default AniDetail;