import styled from 'styled-components'
export const Wrapper = styled.div`
  height: calc(100vh - 70px);
  margin-top: 70px;
  flex: 1;
  padding: 30px 80px;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
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

export const GridWrapper = styled(Wrapper)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  row-gap: 2rem;
  @media screen and (min-width: 600px) {
    max-height: 500px;
    grid-template-columns: 1fr 1fr;
  }
`

export const CardStyle = styled.div`
  background: ${({ background }) => (background ? background : 'red')};
  width: 100%;
  height: 200px;
  border-radius: 2rem;
  padding: 3rem;
  display: flex;
  align-items: center;
  color: white;
`
