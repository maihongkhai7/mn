import React from 'react'
import styled from 'styled-components'
import Page from './Page'
import Box from './Box'

const Title=styled.h3`
  font-weight:700;
  font-size:2rem;
  padding:10px 20px;
  margin:0;
`
const SubTitle=styled.div`
  color:${p=>p.theme.color.text.secondary};
  padding:10px 20px;
  margin:0;
`
const Head=styled.div`
  padding:10px;  
`

const Table=styled.table`
    width:100%;
    border-collapse: collapse;
    border-spacing: 0;
`
const Row=styled.tr`
border-top:${p=>p.borderNone?'none':`1px solid `+p.theme.color.text.div};
`
const Cell=styled.td`
  display:table-cell;
  padding:${p=>p.padding?p.padding:p.giai?'5px':'4px 10px'};
  border-left:1px solid ${p=>p.theme.color.text.div};
  text-align:${p=>p.align?p.align:p.giai?'center':'right'};
  letter-spacing:${p=>p.spacing||'0px'};
  color:${p=>p.color?p.color:p.giai?p.theme.color.text.secondary:p.theme.color.text.primary};
  font-weight:${p=>p.fontWeight?p.fontWeight:p.giai?400:500};
  font-size:${p=>p.fontSize?p.fontSize:p.giai?'1.1rem':'1.3rem'};
  :first-child{
    border-left:none;
  } 
`

const getTenTinh=(a)=>{
    let ar=[];
    a.map(i=>{
        switch(i){
            case "1":ar.push("TP. HCM");break
            case "2":ar.push("Đồng Tháp");break
            case "3":ar.push("Cà Mau");break
            case "7":ar.push("Bến Tre");break
            case "8":ar.push("Vũng Tàu");break
            case "9":ar.push("Bạc Liêu");break
            case "10":ar.push("Đồng Nai");break
            case "11":ar.push("Cần Thơ");break
            case "12":ar.push("Sóc Trăng");break
            case "13":ar.push("Tây Ninh");break
            case "14":ar.push("An Giang");break
            case "15":ar.push("Bình Thuận");break
            case "16":ar.push("Vĩnh Long");break
            case "17":ar.push("Bình Dương");break
            case "18":ar.push("Trà Vinh");break
            case "19":ar.push("Long An");break
            case "20":ar.push("Hậu Giang");break
            case "21":ar.push("Bình Phước");break
            case "22":ar.push("Tiền Giang");break
            case "23":ar.push("Kiên Giang");break
            case "24":ar.push("Đà Lạt");break
            
            case "26":ar.push("Thừa T. Huế");break
            case "27":ar.push("Phú Yên");break
            case "28":ar.push("Quảng Nam");break
            case "29":ar.push("Đắk Lắk");break
            case "30":ar.push("Đà Nẵng");break
            case "31":ar.push("Khánh Hòa");break
            case "32":ar.push("Bình Định");break
            case "33":ar.push("Quảng Trị");break
            case "34":ar.push("Quảng Bình");break
            case "35":ar.push("Gia Lai");break
            case "36":ar.push("Ninh Thuận");break
            case "37":ar.push("Quảng Ngãi");break
            case "38":ar.push("Đắk Nông");break
            case "39":ar.push("Kon Tum");break
            
            case "46":ar.push("Hà Nội");break
            case "47":ar.push("Quảng Ninh");break
            case "48":ar.push("Bắc Ninh");break
            case "49":ar.push("Hải Phòng");break
            case "50":ar.push("Nam Định");break
            case "51":ar.push("Thái Bình");break
        }
    })
    return ar;
}
const getNgay=(a)=>{
  let time=new Date(+a)
  let thu=time.getDay()
  switch(thu){
    case 0:thu="Chủ Nhật";break
    case 1:thu="Thứ Hai";break
    case 2:thu="Thứ Ba";break
    case 3:thu="Thứ Tư";break
    case 4:thu="Thứ Năm";break
    case 5:thu="Thứ Sáu";break
    case 6:thu="Thứ Bảy";break
  }
  return thu +`, `+time.getDate()+` - `+ Number(time.getMonth()+1) +` - `+time.getFullYear()
}
const MNT=(p)=>{
    let kq=p.trung?p.kqmt:p.kqmn
    let keymt = p.matinh.filter((mtinh) => {
      return mtinh>25&mtinh<=40
    })
    let keymn = p.matinh.filter((mtinh) => {
      return mtinh<25
    })
    let keyTinh=p.trung?keymn:keymt
    const tenTinh=getTenTinh(keyTinh)
    return ( 
      <Page>
        <Head>
          <Title>Kết quả {p.trung?'miền trung':'miền nam'}</Title>
          <SubTitle>{getNgay(p.time)}</SubTitle>
        </Head>
        <Table>
          <thead>
            <Row>
              <Cell giai>Tỉnh</Cell>
              {tenTinh.map((v,i)=>(
              <Cell key={'tinh'+i} color="blue" fontWeight={500} spacing="-1px" fontSize="1.2rem" padding='10px 0' align="center">{v}</Cell>
              ))}
            </Row>
          </thead>
          <tbody>
          <Row>
            <Cell giai>Giải tám</Cell>
              {keyTinh.map((v,i)=>(
                <Cell color="brown" fontWeight="600" fontSize="2rem" key={"tam"+i}>{kq[i*18]}</Cell>
              ))}
          </Row>
          <Row>
            <Cell giai>Giải bảy</Cell>
              {keyTinh.map((v,i)=>(
                <Cell key={"bay"+i}>{kq[i*18+1]}</Cell>
              ))}
          </Row>
          <Row>
            <Cell giai rowSpan={3}>Giải sáu</Cell>
              {keyTinh.map((v,i)=>(
                <Cell key={"sau0"+i}>{kq[i*18+2]}</Cell>
              ))}
          </Row>
          <Row borderNone>
              {keyTinh.map((v,i)=>(
                <Cell key={"sau1"+i}>{kq[i*18+3]}</Cell>
              ))}
          </Row>
          <Row borderNone>
              {keyTinh.map((v,i)=>(
                <Cell key={"sau2"+i}>{kq[i*18+4]}</Cell>
              ))}
          </Row>
          <Row>
            <Cell giai>Giải năm</Cell>
              {keyTinh.map((v,i)=>(
                <Cell key={"nam"+i}>{kq[i*18+5]}</Cell>
              ))}
          </Row>
          <Row>
            <Cell giai rowSpan={7}>Giải tư</Cell>
              {keyTinh.map((v,i)=>(
                <Cell key={"tu0"+i}>{kq[i*18+6]}</Cell>
              ))}
          </Row>
          <Row borderNone>
              {keyTinh.map((v,i)=>(
                <Cell key={"tu1"+i}>{kq[i*18+7]}</Cell>
              ))}
          </Row>
          <Row borderNone>
              {keyTinh.map((v,i)=>(
                <Cell key={"tu2"+i}>{kq[i*18+8]}</Cell>
              ))}
          </Row>
          <Row borderNone>
              {keyTinh.map((v,i)=>(
                <Cell key={"tu3"+i}>{kq[i*18+9]}</Cell>
              ))}
          </Row>
          <Row borderNone>
              {keyTinh.map((v,i)=>(
                <Cell key={"tu4"+i}>{kq[i*18+10]}</Cell>
              ))}
          </Row>
          <Row borderNone>
              {keyTinh.map((v,i)=>(
                <Cell key={"tu5"+i}>{kq[i*18+11]}</Cell>
              ))}
          </Row>
          <Row borderNone>
              {keyTinh.map((v,i)=>(
                <Cell key={"tu6"+i}>{kq[i*18+12]}</Cell>
              ))}
          </Row>
          <Row>
            <Cell giai rowSpan={2}>Giải ba</Cell>
              {keyTinh.map((v,i)=>(
                <Cell key={"ba0"+i}>{kq[i*18+13]}</Cell>
              ))}
          </Row>
          <Row borderNone>
              {keyTinh.map((v,i)=>(
                <Cell key={"ba1"+i}>{kq[i*18+14]}</Cell>
              ))}
          </Row>
          <Row>
            <Cell giai>Giải nhi</Cell>
              {keyTinh.map((v,i)=>(
                <Cell key={"nhi0"+i}>{kq[i*18+15]}</Cell>
              ))}
          </Row>
          <Row>
            <Cell giai>Giải nhất</Cell>
              {keyTinh.map((v,i)=>(
                <Cell key={"nhat0"+i}>{kq[i*18+16]}</Cell>
              ))}
          </Row>
          <Row>
            <Cell giai>Đặc Biệt</Cell>
              {keyTinh.map((v,i)=>(
                <Cell color="brown" fontWeight="600" fontSize="1.4rem" key={"db"+i}>{kq[i*18+17]}</Cell>
              ))}
          </Row>
          </tbody>
        </Table>
      </Page> 
      
    )
}

const MB=(p)=>{
  const kq=p.kqmb
    const keyTinh=p.matinh.filter(tinh => tinh>40)
    const tenTinh=getTenTinh(keyTinh)
    return ( 
      <Page>
        <Head>
          <Title>Kết quả miền bắc</Title>
          <SubTitle>{getNgay(p.time)}</SubTitle>
        </Head>
        <Table>
          <thead>
            <Row>
              <Cell giai>Tỉnh</Cell>
              <Cell align="center" key={'tinhmb'} color="blue" fontWeight={500} spacing="-1px" fontSize="1.2rem" padding='10px 0' align="center">{tenTinh}</Cell>
            </Row>
            <Row>
              <Cell giai>Đặc Biệt</Cell>
              <Cell color="brown" fontWeight="600" fontSize="2rem" align="center">{kq[0]}</Cell>
            </Row>
            <Row>
              <Cell giai>Giải nhất</Cell>
              <Cell fontSize="1.5rem" align="center">{kq[1]}</Cell>
            </Row>
            <Row>
              <Cell giai>Giải nhì</Cell>
              <Cell align="center">
                <Box display="flex">
                  <Box textAlign="center">{kq[2]}</Box>
                  <Box textAlign="center">{kq[3]}</Box>
                </Box>
              </Cell>
            </Row>
            <Row>
              <Cell giai>Giải ba</Cell>
              <Cell align="center">
                <Box display="flex" fd="column">
                  <Box display="flex">
                    <Box textAlign="center">{kq[4]}</Box>
                    <Box textAlign="center">{kq[5]}</Box>
                    <Box textAlign="center">{kq[6]}</Box>
                  </Box>
                  <Box display="flex">
                    <Box textAlign="center">{kq[7]}</Box>
                    <Box textAlign="center">{kq[8]}</Box>
                    <Box textAlign="center">{kq[9]}</Box>
                  </Box>
                </Box>
              </Cell>
            </Row>
            <Row>
              <Cell giai>Giải tư</Cell>
              <Cell align="center">
                <Box display="flex" fd="column">
                  <Box display="flex">
                    <Box textAlign="center">{kq[10]}</Box>
                    <Box textAlign="center">{kq[11]}</Box>
                  </Box>
                  <Box display="flex">
                    <Box textAlign="center">{kq[12]}</Box>
                    <Box textAlign="center">{kq[13]}</Box>
                  </Box>
                </Box>
              </Cell>
            </Row>
            <Row>
              <Cell giai>Giải năm</Cell>
              <Cell align="center">
                <Box display="flex" fd="column">
                  <Box display="flex">
                    <Box textAlign="center">{kq[14]}</Box>
                    <Box textAlign="center">{kq[15]}</Box>
                    <Box textAlign="center">{kq[16]}</Box>
                  </Box>
                  <Box display="flex">
                    <Box textAlign="center">{kq[17]}</Box>
                    <Box textAlign="center">{kq[18]}</Box>
                    <Box textAlign="center">{kq[19]}</Box>
                  </Box>
                </Box>
              </Cell>
            </Row>
            <Row>
              <Cell giai>Giải sáu</Cell>
              <Cell align="center">
                  <Box display="flex">
                    <Box textAlign="center">{kq[20]}</Box>
                    <Box textAlign="center">{kq[21]}</Box>
                    <Box textAlign="center">{kq[22]}</Box>
                  </Box>
              </Cell>
            </Row>
            <Row>
              <Cell giai>Giải bảy</Cell>
              <Cell color="brown" fontWeight="600" fontSize="1.7rem" align="center">
                  <Box display="flex">
                    <Box textAlign="center">{kq[23]}</Box>
                    <Box textAlign="center">{kq[24]}</Box>
                    <Box textAlign="center">{kq[25]}</Box>
                    <Box textAlign="center">{kq[26]}</Box>
                  </Box>
              </Cell>
            </Row>
          </thead>
        </Table>
      </Page>
)}

export {MNT,MB}