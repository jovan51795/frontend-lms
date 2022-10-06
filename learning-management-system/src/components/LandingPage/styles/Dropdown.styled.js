import styled from 'styled-components'
import { v, b } from '../assets/styles/variables'

export const SDropdown = styled.div`
  background: #f9f9f9;
  top: ${v.headerHeight};
  white-space: nowrap;
  padding: ${v.smSpacing};
  @media ${b.md} {
    min-width: 250%;
    position: absolute;
  }
`

export const STreeItem = styled.div`
  text-align: left;
  padding: ${v.smSpacing};
`

export const STreeChild = styled.div`
  margin-top: ${v.smSpacing};
  background: rgba(255, 255, 255, 0.2);
`