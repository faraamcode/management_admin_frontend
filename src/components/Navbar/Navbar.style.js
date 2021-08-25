import styled from 'styled-components'
import { White } from '../../utils/color'
import { DarkShadow, LightShadow } from '../../common/Global.Style'
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: ${White};
  padding: 10px 50px;
  box-shadow: ${LightShadow};
`
