import styled from 'styled-components'

const Div=styled.hr`
color:${p=>p.theme.color.text.div};
width:${p=>p.width||"100%"}
`

export default Div