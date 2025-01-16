import styled from 'styled-components'
import colors from '../../styles/colors'

export const RestSection = styled.section`
  background-color: ${colors._background};
`

export const RestList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 6%;

  li {
    margin-bottom: 48px;
    border: 1px solid ${colors._primary};
  }

  @media (max-width: 768px) {
    display: block;
    max-width: 500px;
    margin: 0 auto;
  }
`
