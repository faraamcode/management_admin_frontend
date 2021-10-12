import React, { useState } from 'react'
import Form from '../components/Form'
import Info from '../components/Info'
import { Wrapper } from '../components/main.style'
import { useModalContext } from '../../../context/modal.context'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAbout } from '../../../redux/Actions/AboutActionCreator'
import { useAuthContext } from '../../../services/auth.service'

export default function About () {
  const About = useSelector(state => state.About)
  const dispatch = useDispatch()
  const { token } = useAuthContext()
  console.log(token)
  React.useEffect(() => {
    dispatch(fetchAbout(token))
  }, [])
  const { openModal, setOpenModal } = useModalContext()
  return (
    <>
      <Wrapper>
        {About.success &&
          About.about.map(item => (
            <Info
              key={item.id}
              image={item['image_url']}
              title={item['about_title']}
              text={item['about_info']}
              setOpenModal={setOpenModal}
            />
          ))}
      </Wrapper>
      {openModal && <Form />}
    </>
  )
}
