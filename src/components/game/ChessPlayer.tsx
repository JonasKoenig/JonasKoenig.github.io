import { useTranslation } from "react-i18next";
import { useUrlState } from "../../core/State";
import { Header } from "../Nav";

export const Player1 = () => {
    const {t} = useTranslation();
    const [player1] = useUrlState('p1', '');
    if (player1 === '') return <Header label={t(`game.header`)} />
    return <Header variant='h3' label={player1} />
}

export const Player2 = () => {
    const [player2, _] = useUrlState('p2', '');
    if (player2 === '') return null
    return <Header variant='h3' label={player2} />
}