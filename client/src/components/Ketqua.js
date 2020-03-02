import React from 'react';
import Box from '../styled/Box'
import Panel from '../styled/Panel'
import {Tag} from '../styled/Panel'
import Div from '../styled/Div'
import { Route } from 'react-router-dom';
import Link from '../styled/Link'
import {MNT,MB} from '../styled/Table'
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { Icon } from 'antd';

const Mien=({ match })=>{
    return(
      <>
      <Panel>
        <Box>
          <Box display="flex" wrap="wrap">
            <Link to={`${match.path}/thu-2`} activeClassName="active_1"><Tag>Thứ 2</Tag></Link>
            <Link to={`${match.path}/thu-3`} activeClassName="active_1"><Tag>Thứ 3</Tag></Link>
            <Link to={`${match.path}/thu-4`} activeClassName="active_1"><Tag>Thứ 4</Tag></Link>
            <Link to={`${match.path}/thu-5`} activeClassName="active_1"><Tag>Thứ 5</Tag></Link>
            <Link to={`${match.path}/thu-6`} activeClassName="active_1"><Tag>Thứ 6</Tag></Link>
            <Link to={`${match.path}/thu-7`} activeClassName="active_1"><Tag>Thứ 7</Tag></Link>
            <Link to={`${match.path}/chu-nhat`} activeClassName="active_1"><Tag>CN</Tag></Link>   
          </Box>
          <Div/>  
        </Box>
      </Panel>
      <Box>
        <Route path={`${match.path}/:thu`} component= {({match})=>(<Thu thu={match.params.thu} mien={match.path}/>)}/>
        <Route path={`${match.path}/`} exact component= {({match}) =>(<Thu thu="default" mien={match.path}/>)}/>
      </Box>
      </>
    ) 
}  
const Thu=({thu,mien})=>{
  var [kq,setKq]=React.useState([])
  let thuq,skip=0,mienq=""
  switch(thu){
    case "thu-2":thuq=1;break;
    case "thu-3":thuq=2;break;
    case "thu-4":thuq=3;break;
    case "thu-5":thuq=4;break;
    case "thu-6":thuq=5;break;
    case "thu-7":thuq=6;break;
    case "chu-nhat":thuq=0;break;
    default:thuq=null
  }
  switch(mien){
    case "/ket-qua-mien-nam/:thu":mienq="kqmn";break;
    case "/ket-qua-mien-trung/:thu":mienq="kqmt";break;
    case "/ket-qua-mien-bac/:thu":mienq="kqmb";break;
    case "/ket-qua-mien-nam/":mienq="kqmn";break;
    case "/ket-qua-mien-trung/":mienq="kqmt";break;
    case "/ket-qua-mien-bac/":mienq="kqmb";break;
  }
  let query=`query{
        kq(where:${thuq},skip:${skip},limit:7){
          time
          matinh
          ${mienq}
        }
      }` 
  function Fet(){
    fetch('http://localhost:5000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({query})
    })
    .then(r => r.json())
    .then(r =>{
      let a=kq.concat(r.data.kq)
      setKq(a)
      skip++
    })
  }
  React.useEffect(()=>{
    Fet()
  },[])

  if(mienq==="kqmn"){
    return(<>
      {kq.map((v,i)=><MNT key={i} {...v} />)}
      <Chip avatar={<Avatar><Icon type="more" /></Avatar>} label="Xem thêm" onClick={Fet} />
      <Chip
        avatar={<Avatar><Icon type="more" /></Avatar>}
        label="Tự động xem thêm"
        clickable
        onClick={Fet}
      />
      <Chip
        avatar={<Avatar><Icon type="to-top" /></Avatar>}
        label="Lên đầu trang"
        clickable
      />
      </>
  )}
  if(mienq==="kqmt"){
    return(
      kq.map((v,i)=><MNT trung={true} key={i} {...v} />)
  )}
  if(mienq==="kqmb"){
    return(
      kq.map((v,i)=><MB key={i} {...v} />)
  )}
}

const Ketqua=()=>{
  return (
    <div>
      <Panel>
        <Div width="0%"/>
          <Box display="flex" wrap="wrap">
            <Link to={`/ket-qua-mien-nam`} activeClassName="active_1"><Tag>Miền Nam</Tag></Link>
            <Link to={`/ket-qua-mien-trung`} activeClassName="active_1"><Tag>Miền Trung</Tag></Link>
            <Link to={`/ket-qua-mien-bac`} activeClassName="active_1"><Tag>Miền Bắc</Tag></Link>
          </Box>
        <Div/>
      </Panel>
      <Box>
        <Route path={`/ket-qua-mien-nam`} render= {({match})=>(<Mien match={match}/>)}/>
        <Route path={`/ket-qua-mien-trung`} render= {({match})=>(<Mien match={match}/>)}/>
        <Route path={`/ket-qua-mien-bac`} render= {({match})=>(<Mien match={match}/>)}/>
      </Box>
    </div>
    
  )
}
export default Ketqua