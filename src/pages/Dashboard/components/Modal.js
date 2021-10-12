import React from 'react'
import styled from 'styled-components'
import { useModalContext } from '../../../context/modal.context'
import Form from './Form'

export default function Modal ({ children }) {
  const { openModal } = useModalContext()
  return <Wrapper openModal={openModal}>{children}</Wrapper>
}

const Wrapper = styled.div`
  display: ${({ openModal }) => (openModal ? 'flex' : 'none')};
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 20;
`
