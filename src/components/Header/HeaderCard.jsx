import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Modal } from "../Modal/Modal";
import { setModalOpened } from "../../store/modalSlice";

export const HeaderCard = ({ data, handleExit }) => {
  // const {avatar, first_name, last_name} = data
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  let modalOpened = useSelector((state) => state.modal.opened);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="headerCard">
        <button
          className="header__button header__button_type_back"
          onClick={handleGoBack}
        >
          Назад
        </button>
        <button
          className="header__button header__button_type_exit"
          onClick={handleExit}
        >
          Выход
        </button>
        <div className="headerCard__wrapper">
          <img
            src={data?.avatar}
            className="header__img"
            onClick={() => dispatch(setModalOpened())}
          />
          <div className="headerCard__text">
            <h1 className="headerCard__title">{`${data?.first_name} ${data?.last_name}`}</h1>
            <p className="headerCard__description">Партнер</p>
          </div>
        </div>
      </div>
      {modalOpened && <Modal data={data}/>}
    </header>
  );
};
