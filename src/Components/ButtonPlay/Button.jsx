import "./Button.css"
import { useNavigate } from 'react-router-dom';

function Button() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Game');
  };

  return (
    <div>
    <button className="BottoneGioca" onClick={handleClick}>
      GIOCA ORA! 
      <svg fill="#049CD8" height="40px" width="40px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 210 210" xml:space="preserve">
        <path d="M179.07,105L30.93,210V0L179.07,105z"/>
      </svg>
    </button>
  </div>
  );
}

export default Button;
