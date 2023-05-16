import "./Header.sass";
import useMediaQuery from "../../utils/hooks/useMediaQuery";
export const HeaderHome = ({handleExit}) => {

  const isMobile = useMediaQuery("(max-width: 1100px)");
  return (
    <header className="header headerHome">
      <div className="headerHome__wrapper">
        <button className="header__button header__button_type_exit" onClick={handleExit}>{!isMobile ? 'Выход' : ''}</button>
        <h1 className="header__title">Наша команда</h1>
        <p className="header__description">
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
          ложатся на их плечи, и умеющие находить выход из любых, даже самых
          сложных ситуаций.
        </p>
      </div>
    </header>
  );
};
