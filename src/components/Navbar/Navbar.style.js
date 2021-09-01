import styled from 'styled-components'
import { White } from '../../utils/color'
import { DarkShadow, LightShadow } from '../../common/Global.Style'
import { Link } from 'react-router-dom'
export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: ${White};
  padding: 10px 50px;
  box-shadow: ${LightShadow};
  background: transparent;
`

export const NavLogoStyle = styled(Link)`
  flex: 1;
`
