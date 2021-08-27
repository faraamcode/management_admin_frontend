import React from 'react'
import styled from 'styled-components'
import { MainButton } from '../../../components/Button'
import { BigCard } from '../../../components/Card/card.style'
import { Input } from '../../../components/Form/Input'
import { ButtonStyle } from '../../../components/Button'
import ContactImage from '../../../assets/images/cheerful.jpg'
export default function ContactForm () {
  const ContactButton = styled(ButtonStyle)`
    width: 100%;
  `
  return (
    <BigCard>
      <img width='100%' height='50%' src={ContactImage} />
      <Input name='name' placeholder='enter your name *' />
      <Input name='email' placeholder='enter your email *' />
      <Input name='phone' placeholder='enter your phone *' />
      <ContactButton>Talk to us</ContactButton>
    </BigCard>
  )
}
