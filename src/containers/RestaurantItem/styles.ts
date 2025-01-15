import colors from '../../styles/colors'
import styled from 'styled-components'

export const Image = styled.div`
  position: relative;
  height: 218px;
  background-color: #ddd;
`

export const Categories = styled.ul`
  position: absolute;
  display: flex;
  margin: 16px;
  right: 0;
`

export const Category = styled.li`
  background-color: ${colors._primary};
  color: ${colors._secundary};
  margin-left: 8px;
  padding: 6px 4px;
  font-size: 12px;
  font-weight: bold;
`

export const Tag = styled.div`
  padding: 8px;
  background-color: #fff;
`

export const Space = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const Rating = styled.span`
  display: flex;
  align-items: flex-end;
`

export const Star = styled.i`
  color: ${colors._startColor};
  font-size: 1.5em;
  margin-left: 8px;
`

export const MoreLink = styled.a`
  color: ${colors._secundary};
  background-color: ${colors._primary};
  font-weight: bold;
  font-size: 1em;
  padding: 4px 6px;
  margin-top: 16px;
  display: inline-block;
`
