import styled from 'styled-components'

const Panel=styled.div`
  background:${p=>p.theme.color.grey[100]};
  width:100%;
  @media only screen and (min-width: 600px){
  }
`
const Tag=styled.span`
color: rgba(0, 0, 0, 0.87);
border: none;
cursor: pointer;
height: 32px;
display: inline-flex;
outline: 0;
padding: 5px;
margin:5px;
padding-left:15px;
padding-right:15px;
color:${p=>p.theme.color.grey[100]};
font-size: 1rem;
box-sizing: border-box;
transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
align-items: center;
font-family: "Roboto", "Helvetica", "Arial", sans-serif;
white-space: nowrap;
border-radius: 16px;
vertical-align: middle;
justify-content: center;
text-decoration: none;
background:${p=>p.theme.color.grey[600]};

`
export default Panel
export {Tag}