import styled from 'styled-components'
import { DarkShadow } from '../../common/Global.Style'
import { Dark, Grey, White } from '../../utils/color'

export const CardContainerStyle = styled.div`
  padding: 20px;
  width: 300px;
  height: 400px;
  box-shadow: ${DarkShadow};
  transition: all 0.2s ease-in-out;
  border: 1px solid rgba(0, 0, 0, 0.04);
  &:hover {
    box-shadow: none;
  }
`

export const BigCard = styled.div`
  padding: 20px;
  width: 300px;
  height: 600px;
  box-shadow: ${DarkShadow};
  transition: all 0.2s ease-in-out;
  border: 1px solid rgba(0, 0, 0, 0.04);
  &:hover {
    box-shadow: none;
  }
`
