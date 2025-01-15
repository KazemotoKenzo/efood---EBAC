import utensils from '../../assets/images/utensils.png'

import styled from 'styled-components'

export const HeaderBar = styled.header`
  background-image: url('${utensils}');
  background-size: auto 15px;
`

export const HeaderContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
`

export const Left = styled.a`
  position: absolute;
  left: 0;
`
export const Right = styled.a`
  position: absolute;
  right: 0;
`
