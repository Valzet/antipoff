import { useDispatch, useSelector } from "react-redux";
import "./Modal.sass";
import { setModalClosed } from "../../store/modalSlice";
import { useState } from "react";
import { setUsers } from "../../store/usersSlice";

export const Modal = ({ data }) => {
  const [img, setImage] = useState(null);
  const dispatch = useDispatch();
  const closeModal = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(setModalClosed());
  };

  const changeImg = (e) => {
    setImage(e.target.value);
  };

  const handleChangeImg = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(e);
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userIndex = users.findIndex((el) => el.id == data.id);
    users[userIndex].avatar = img;
    localStorage.setItem("users", JSON.stringify(users));
    dispatch(setUsers(users));
    dispatch(setModalClosed());
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__close" onClick={closeModal}>
          &#10007;
        </button>
        <form className="modal__form">
          <h2 className="modal__title">Изменить фото</h2>
          <input
            onChange={(e) => changeImg(e)}
            className="modal__input"
            placeholder="Добавьте ссылку"
            type="url"
          />
          <button className="modal__button" onClick={(e) => handleChangeImg(e)}>
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};
