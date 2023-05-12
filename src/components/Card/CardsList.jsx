import { useSelector } from "react-redux";
import { CardItem } from "./CardItem";
import "./Card.sass";
import { useEffect, useState } from "react";

export const CardList = () => {
  const [data, setData] = useState([]);
  const [cardsCount, setCardsCount] = useState(8);
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    setData(users.data?.slice(0, cardsCount));
  }, [cardsCount, users]);

  const handleAddMoreCards =() => {
    setCardsCount((prev) => prev + 4);
  }

  return (
    <section className="cardList">
      <ul className="cardList__wrapper">
        {data?.map((el) => (
          <CardItem data={el} key={el.id} />
        ))}
      </ul>
      {cardsCount <= 9 && (
        <button className="cardList__button" onClick={handleAddMoreCards}>
          Показать еще <div className="cardList__button-icon"></div>
        </button>
      )}
    </section>
  );
};
