export const CardItem = (el) => {
    const data = el.data

    return(

        <li className="cardItem">
            <div className="cardItem__wrapper">
                <img src={data.avatar} alt={data.last_name} className="cardItem__img" />
                <h3 className="cardItem__text">{`${data.first_name} ${data.last_name}`}</h3>
            </div>
            <button className="cardItem__button"></button>
        </li>
    )
}