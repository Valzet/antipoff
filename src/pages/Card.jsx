import { useParams } from "react-router-dom";
import { HeaderCard } from "../components/Header/HeaderCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { CardOpened } from "../components/Card/CardOpened";

export const CardPage = ({handleExit}) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const card = useSelector((state) => state.users);
  useEffect(() => {
    if(card.users.length >= 0) {
    let cardData = card.users?.find((el) => el.id == id);
    setData(cardData);
  }
  }, [card]);
  return (
    <section className="CardPage">
      <HeaderCard data={data} handleExit={handleExit} />
      <CardOpened data={data} />
    </section>
  );
};
