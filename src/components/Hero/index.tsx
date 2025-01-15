import logo from '../../assets/images/logo.png'

import { Description, HeroBar, HeroContainer, Logo } from './styles'

const Hero = () => (
  <HeroBar>
    <HeroContainer>
      <Logo src={logo} alt="Logo efood" />
      <Description>
        Viva experiências gastronômicas no conforto da sua casa
      </Description>
    </HeroContainer>
  </HeroBar>
)

export default Hero
