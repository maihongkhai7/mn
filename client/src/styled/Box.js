import styled from 'styled-components'

const Box=styled.div`
  display:${p=>p.display||'block'};
  flex-direction: ${p=>p.fd||''};
  width:100%;
  flex-wrap: ${p=>p.wrap||''};
  text-align:${p=>p.textAlign||''}
  ${p=>{
    return p.p?'padding:'+p.p:''
  }}
`
export default Box