import './ChaPhoto.css';

const ChaPhoto = ({ data }) => {
  const { name, birth, stature, agency, image, blood } = data;
  return (
    <div className="ChaPhoto">
      <h2>{name}</h2>
      <div>
        <img src={image} alt={name} />
        <div>
          <span>생년월일 : {birth}</span>
          <span>신장 : {stature}</span>
          <span>혈액형 : {blood}</span>
          <span>소속사 : {agency}</span>
        </div>
      </div>
    </div>
  );
};
export default ChaPhoto;
