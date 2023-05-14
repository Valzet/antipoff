import "./Card.sass";

export const CardOpened = ({ data }) => {
  return (
    <section className="cardOpened">
      <div className="cardOpened__text">
        <p className="cardOpened__text">
          Клиенты видят в нем эксперта по вопросам разработки комплексных
          решений финансовых продуктов, включая такие аспекты, как
          организационная структура, процессы, аналитика и ИТ-компоненты. Он
          помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать
          процессы за счет применения новейших технологий и увеличивать продажи,
          используя самые современные аналитические инструменты.
        </p>
        <p className="cardOpened__text">
          В работе с клиентами недостаточно просто решить конкретную проблему
          или помочь справиться с трудностями. Не менее важно уделять внимание
          обмену знаниями: "Один из самых позитивных моментов — это осознание
          того, что ты помог клиенту перейти на совершенно новый уровень
          компетентности, уверенность в том, что после окончания проекта у
          клиента есть все необходимое, чтобы дальше развиваться
          самостоятельно".
        </p>
        <p className="cardOpened__text">
          Помимо разнообразных проектов для клиентов финансового сектора, Сорин
          ведет активную предпринимательскую деятельность. Он является
          совладельцем сети клиник эстетической медицины в Швейцарии,
          предлагающей инновационный подход к красоте, а также инвестором других
          бизнес-проектов.
        </p>
      </div>

      <ul className="cardOpened__contacts">
        <li className="cardOpened__link_type_phone">
          <a href="#" className="cardOpened__link">
            +7 (954) 333-44-55
          </a>
        </li>
        <li className="cardOpened__link_type_email">
          <a href="#" className="cardOpened__link">
            {data?.email}
          </a>
        </li>
      </ul>
    </section>
  );
};
