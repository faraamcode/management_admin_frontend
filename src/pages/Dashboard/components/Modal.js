import React from 'react'
import styled from 'styled-components'
import Form from './Form'

export default function Modal ({ children }) {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 20;
  display flex;

`
