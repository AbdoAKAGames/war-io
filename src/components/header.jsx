import '../game.css'
import { Currency } from './currency'
import { Title } from './title'
import { TopLeft } from './topleft'

export function Header({ showProfile }){
    return (
        <>
        <Title />
        <TopLeft showProfile={showProfile} />
        <Currency />
        </>
    )
}