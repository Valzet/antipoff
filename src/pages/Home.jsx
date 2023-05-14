import { CardList } from "../components/Card/CardsList"
import { HeaderHome } from "../components/Header/HeaderHome"

export const HomePage = ({handleExit}) => {
    return (
        <>
        <HeaderHome handleExit={handleExit}/>
        <CardList />
        </>
    )
}