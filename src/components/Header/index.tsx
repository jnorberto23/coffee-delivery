import { MapPin, ShoppingCart } from 'phosphor-react'
import { CartButton, CartButtonBadge, HeaderContainer, RegionAndCartContainer, RegionSpan } from './styles'
import Logo from '../../assets/logo.png'
import { useContext } from 'react'
import { SelectedCoffeesContext } from '../../context/SelectedCoffeesContext'

export function Header() {
    const { count } = useContext(SelectedCoffeesContext)
    return (
        <HeaderContainer>
            <div>
                <img src={Logo} alt="" />
            </div>
            <RegionAndCartContainer>
                <RegionSpan>
                    <MapPin size={22} weight="fill"/>
                    Pindamonhangaba, SP
                </RegionSpan>
                
                <CartButton to={'checkout'} >
                    <ShoppingCart size={22} weight="fill"/>
                  
                </CartButton>
                <CartButtonBadge>{count}</CartButtonBadge>
            </RegionAndCartContainer>
        </HeaderContainer>
    )
}

