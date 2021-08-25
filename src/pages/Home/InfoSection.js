import React from 'react'
import styled from 'styled-components'

import { H1, H2, Wrapper, Section } from '../../common/Global.Style'
import AppStoreLogo from '../../assets/images/appstoreLogo.png'
import GooglePlayLogo from '../../assets/images/googlePlayLogo.png'
import { StyleLink } from '../../components/Button'
// import {White_} from '../../utils/color'

const LogoWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`
const HeadingWrapper = styled(H2)`
  text-align: center;
  align-self: center;
  flex: 1;
`
const WebLink = styled(StyleLink)`
  font-size: 20px;
  text-decoration: underline;
  margin-top: 5px;

  @media screen and (min-width: 760px) {
    font-size: 30px;
    margin-top: 15px;
  }
`
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  @media screen and (min-width: 760px) {
    flex-direction: row;
  }
`
export default function InfoSection () {
  return (
    <Wrapper>
      <Section>
        <HeadingWrapper>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia,
          ducimus?
        </HeadingWrapper>
        <LogoWrapper>
          <LogoContainer>
            <StyleLink to='/'>
              <img src={AppStoreLogo} />
            </StyleLink>
            <StyleLink to='/'>
              <img src={GooglePlayLogo} />
            </StyleLink>
          </LogoContainer>
          <WebLink to='/'>use the web version</WebLink>
        </LogoWrapper>
      </Section>
    </Wrapper>
  )
}
