import styled from 'styled-components'
import { White } from '../../utils/color'
import { DarkShadow, LightShadow } from '../../common/Global.Style'
import { Link } from 'react-router-dom'
export const Nav = styled.nav`
  margin: 0 auto;
  max-width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  //   background: red;
`

export const NavWrapper = styled.div`
  display: flex;
  background-color: ${White};
  box-shadow: ${LightShadow};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 70px;
  padding: 10px 100px;
  @media (max-width: 400px) {
    padding: 10px 30px;
  }
  @media (min-width: 401px) and (max-width: 700px) {
    padding: 10px 50px;
  }

  @media (min-width: 701px) and (max-width: 1000px) {
    padding: 10px 60px;
  }
`

export const NavLogoStyle = styled(Link)`
  flex: 1;
`
