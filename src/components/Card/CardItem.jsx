import { useNavigate } from "react-router-dom";

export const CardItem = (el) => {
  const data = el.data;
  const navigate = useNavigate();

  const handleCard = (e) => {
    navigate(`/${data.id}`);
  };

  const handleLike = (e) => {
    e.stopPropagation();
  };

  return (
    <li className="cardItem" onClick={handleCard}>
      <div className="cardItem__wrapper">
        <img src={data.avatar} alt={data.last_name} className="cardItem__img" />
        <h3 className="cardItem__text">{`${data.first_name} ${data.last_name}`}</h3>
      </div>
      <button
        className="cardItem__button"
        onClick={(e) => handleLike(e)}
      ></button>
    </li>
  );
};
