import { Link } from 'react-router-dom'
import utensils from '../../assets/images/utensils.png'

import styled from 'styled-components'
import colors from '../../styles/colors'

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

  @media (max-width: 798px) {
    display: block;
    text-align: center;
  }
`

export const Left = styled(Link)`
  position: absolute;
  color: ${colors._primary};
  left: 0;

  @media (max-width: 798px) {
    position: static;
    display: block;
  }
`
export const Right = styled.button`
  position: absolute;
  color: ${colors._primary};
  right: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 798px) {
    display: block;
    position: static;
    margin: 0 auto;
  }
`
