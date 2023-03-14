import { MapPin, ShoppingCart } from 'phosphor-react'
import { CartButton, HeaderContainer, RegionAndCartContainer, RegionSpan } from './styles'
import Logo from '../../assets/logo.png'

export function Header() {

    return (
        <HeaderContainer>
            <div>
                <img src={Logo} alt="" />
            </div>
            <RegionAndCartContainer>
                <RegionSpan>
                    <MapPin size={25} weight="fill"/>
                    Pindamonhangaba
                </RegionSpan>
                <CartButton>
                    <ShoppingCart size={25} weight="fill"/>
                </CartButton>
            </RegionAndCartContainer>
        </HeaderContainer>
    )
}

