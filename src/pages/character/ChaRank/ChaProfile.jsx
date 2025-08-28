import './ChaProfile.css';

const ChaProfile = ({ data }) => {
  const { profile } = data;
  return (
    <div className="ChaProfile">
      <span>{profile}</span>
    </div>
  );
};
export default ChaProfile;
