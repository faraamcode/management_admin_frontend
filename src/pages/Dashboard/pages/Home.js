import React from 'react'
import styled from 'styled-components'
import userImage from '../../../assets/images/chairman.JPG'
import HomeCard from '../components/card'
import { MdContactMail } from 'react-icons/md'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { GridWrapper, Wrapper } from '../components/main.style'
import UserAvatar from '../components/UserAvatar'
import Profile from '../components/Profile'

const Home = () => {
  return (
    <HomeWrapper>
      <GridWrapper direction='row'>
        <UserAvatar />
        <Profile />
        <HomeCard
          background='green'
          title='Saturday'
          text='21th July 2021'
          icon={<FaRegCalendarAlt />}
        />
        <HomeCard
          background='red'
          title='Contact us'
          text='email: abdulrasaqalagbede@gmail.com'
          icon={<MdContactMail />}
        />
      </GridWrapper>
      <h2>Important notice</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
        consequatur. Itaque facilis rem obcaecati quo nostrum natus illum. Fuga
        omnis, cumque, velit dolorem atque facilis ipsum iusto adipisci
        provident culpa recusandae et harum quo ad odio? At molestiae, ea
        molestias dolor possimus inventore natus! Eaque suscipit sit
        voluptatibus a laborum.
      </p>
    </HomeWrapper>
  )
}

export default Home

const HomeWrapper = styled(Wrapper)`
  padding: 0;
  h2,
  p {
    margin: 0;
    padding-left: 80px;
    @media (max-width: 400px) {
      padding: 0 30px;
    }
    @media (min-width: 401px) and (max-width: 700px) {
      padding: 0 50px;
    }

    @media (min-width: 701px) and (max-width: 1000px) {
      padding: 0 60px;
    }
  }
  h2 {
    margin-bottom: 10px;
    text-decoration: underline;
  }
`
