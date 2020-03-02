import React from 'react'
import styled from 'styled-components'
import {Icon} from 'antd'
import NoMatch from '../components/Nomatch'
import { Route, Switch, NavLink } from 'react-router-dom'
import routes from "../router";
import {grey,blue} from './colors'



const Nav=styled.div`
z-index:1000;
display:flex;
position:fixed;
bottom:0;
left:0;
background:${grey[50]};
width:100%;
border-top:0.5px solid #dbdbdb;
@media only screen and (min-width: 600px){
    top:0;
    left:0;
    width:200px;
    height:100%;
    flex-direction: column;
    overflow-x: auto;
    border-right:1px solid #dbdbdb;
}

`
const List=styled.div`
    display:flex;
    background:${grey[50]};
    padding:10px;
    color:${p=>p.theme.color.text.secondary};
    font-size:1.2rem;
    text-decoration: none;
    text-align:center;
    @media only screen and (max-width: 600px){
      flex-grow: 1;
      flex-direction: column;
      font-size:1rem;
    }
    &.active{
        color:${blue[800]};
        background:${blue[50]};
        border-right:3px solid ${blue[800]};
        @media only screen and (max-width: 600px){
            border-right:none;
            border-top:3px solid ${blue[800]};
        }
    }
`
const Link=List.withComponent(NavLink)
const Item=styled.div`
    text-decoration: none;
    padding-left:20px;
    line-height:1.5rem;
    @media only screen and (max-width: 600px){
        padding-left:0;
    }
`
const Wrap=styled.div`
display:flex;
main{
    padding: 5%;
    @media only screen and (max-width: 600px){
        padding: 2% 2% 30% 2%;
    }
    width:100%;
    height:100vh;
    background-color:${grey[50]};
    overflow-x:auto;
    @media only screen and (min-width: 600px){
        margin-left:200px;
    }
}
`

const Drawer=()=>{
    return(
<Wrap>
    <Nav>
        <Link to="/" exact>
            <Icon type="home" style={{fontSize:'1.5rem'}}/>
            <Item>Trang chủ</Item>
        </Link>
        <Link to="/ket-qua">
            <Icon type="file-search" style={{fontSize:'1.5rem'}}/>
            <Item>Kết quả</Item>
        </Link>
        <Link to="/thong-ke">
            <Icon type="line-chart" style={{fontSize:'1.5rem'}}/>
            <Item>Thống kê</Item>
        </Link>
        <Link to="/cong-dong">
            <Icon type="team" style={{fontSize:'1.5rem'}}/>
            <Item>Cộng đồng</Item>
        </Link>
        
    </Nav>
    <main>
        <Switch>
            { routes.map( route => <Route key={ route.path } { ...route } /> ) }
            <Route component={NoMatch}/>
        </Switch>
    </main>
    
</Wrap>
        
    )
}
export default Drawer