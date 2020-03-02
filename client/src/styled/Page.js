import styled from 'styled-components'

const Wrap=styled.div`
  background:#fff;
  box-shadow:${p=>p.theme.shadows[5]};
  margin:10% 0;
  max-width:500px;
  @media only screen and (min-width: 600px){
    margin:5%;
    border-radius:4px;
  }
`

export default Wrap