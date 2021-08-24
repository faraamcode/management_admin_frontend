import styled from 'styled-components'

export const Wrapper = styled.div`
  background: ${({ background }) => (background ? background : '#fff')};
  width: 100%;
  min-height: 90vh;
  padding: 30px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 400px) {
    padding: 30px 30px;
    min-height: 70vh;
  }
  @media (min-width: 401px) and (max-width: 700px) {
    padding: 30px 50px;
    min-height: 70vh;
  }

  @media (min-width: 701px) and (max-width: 1000px) {
    padding: 30px 60px;
    min-height: 70vh;
  }
`

export const H1 = styled.h1`
  font-family: 'Work Sans';
  font-size: 100px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;

  @media (max-width: 500px) {
    font-size: 40px;
    margin-bottom: 5px;
  }
  @media (min-width: 501px) and (max-width: 750px) {
    font-size: 50px;
    margin-bottom: 5px;
  }
  @media (min-width: 751px) and (max-width: 1000px) {
    font-size: 60px;
    margin-bottom: 30px;
  }
`

export const H2 = styled.h2`
  font-size: 50px;
  font-style: normal;
  line-height: 1.2;
  font-weight: 700;

  @media (max-width: 500px) {
    font-size: 25px;
  }
  @media (min-width: 501px) and (max-width: 750px) {
    font-size: 30px;
  }
  @media (min-width: 751px) and (max-width: 1000px) {
    font-size: 35px;
  }
`
export const H3 = styled.h3`
  font-size: 50px;
  font-style: normal;
  line-height: 1.2;
  font-weight: 300;

  @media (max-width: 500px) {
    font-size: 20px;
  }
  @media (min-width: 501px) and (max-width: 750px) {
    font-size: 26px;
  }
  @media (min-width: 751px) and (max-width: 1000px) {
    font-size: 32px;
  }
`

export const P1 = styled.p`
  font-size: ${({ light }) => (light ? '50px' : '50px')};
  font-style: normal;
  font-weight: ${({ light }) => (light ? '300' : '4000')};

  @media (max-width: 500px) {
    font-size: 17px;
  }
  @media (min-width: 501px) and (max-width: 750px) {
    font-size: 21px;
  }
  @media (min-width: 751px) and (max-width: 1000px) {
    font-size: 28px;
  }
`

export const P2 = styled.p`
  font-size: ${({ light }) => (light ? '30px' : '30px')};
  font-style: normal;
  font-weight: ${({ light }) => (light ? '300px' : '400px')};

  @media (max-width: 500px) {
    font-size: 17px;
  }
  @media (min-width: 501px) and (max-width: 750px) {
    font-size: 21px;
  }
  @media (min-width: 751px) and (max-width: 1000px) {
    font-size: 28px;
  }
`
export const P3 = styled.p`
  font-size: ${({ light }) => (light ? '20px' : '15px')};
  font-style: normal;
  font-weight: ${({ light }) => (light ? '300px' : '400px')};

  @media (max-width: 500px) {
    font-size: 17px;
  }
  @media (min-width: 501px) and (max-width: 750px) {
    font-size: 21px;
  }
  @media (min-width: 751px) and (max-width: 1000px) {
    font-size: 28px;
  }
`
