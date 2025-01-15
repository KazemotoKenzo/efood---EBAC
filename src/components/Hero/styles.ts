import styled from 'styled-components'
import colors from '../../styles/colors'
import { Container } from '../../styles'

export const HeroContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeroBar = styled.header`
  background-color: ${colors._textSecundary};
  padding: 40px 0;
`

export const Logo = styled.img`
  width: 125px;
  margin-bottom: 140px;
`

export const Description = styled.h2`
  font-size: 36px;
  max-width: 540px;
  text-align: center;
`
