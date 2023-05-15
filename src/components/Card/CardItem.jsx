import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUsers } from "../../store/usersSlice";

export const CardItem = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOpenCard = (e) => {
    e.stopPropagation();
    navigate(`/${data.id}`);
  };
  let liked = data.isLiked;
  const handleLike = (e) => {
    e.stopPropagation();
    liked = !data.isLiked;
    saveData();
  };

  const saveData = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userIndex = users.findIndex((el) => el.id == data.id);
    users[userIndex].isLiked = liked;
    localStorage.setItem("users", JSON.stringify(users));
    dispatch(setUsers(users));
  };

  return (
    <li className="cardItem" onClick={handleOpenCard}>
      <div className="cardItem__wrapper">
        <img src={data.avatar} alt={data.last_name} className="cardItem__img" />
        <h3 className="cardItem__text">{`${data.first_name} ${data.last_name}`}</h3>
      </div>
      <button
        className={
          !data.isLiked
            ? "cardItem__button"
            : "cardItem__button cardItem__button_type_liked"
        }
        onClick={(e) => handleLike(e)}
      ></button>
    </li>
  );
};
