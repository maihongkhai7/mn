const request = require('request-promise')
const cheerio = require('cheerio')
let db = require('../src/models').default.Kq
let counter=require('./get')+86400000
let mti=''
let thui=0
let matinhmn,matinhmt,matinhmb

function change_matinh(){
    switch(thui){
        case 0:{matinhmn=['22','23','24'];matinhmt=['39','31'];matinhmb=['51'];};break;
        case 2:{matinhmn=['1','2','3'];matinhmt=['26','27'];matinhmb=['46'];};break;
        case 3:{matinhmn=['7','8','9'];matinhmt=['29','28'];matinhmb=['47'];};break;
        case 4:{matinhmn=['10','11','12'];matinhmt=['30','31'];matinhmb=['48'];};break;
        case 5:{matinhmn=['13','14','15'];matinhmt=['32','33','34'];matinhmb=['46'];};break;
        case 6:{matinhmn=['16','17','18'];matinhmt=['35','36'];matinhmb=['49'];};break;
        case 7:{matinhmn=['1','19','20','21'];matinhmt=['30','37','38'];matinhmb=['50'];};break;
    }
    console.log(matinhmn)
    console.log(matinhmt)
    console.log(matinhmb)
}
change_matinh()

const mn = 'https://www.minhngoc.net/ket-qua-xo-so/mien-nam/';
const mt = 'https://www.minhngoc.net/ket-qua-xo-so/mien-trung/';
const mb = 'https://www.minhngoc.net/ket-qua-xo-so/mien-bac/';

let time=new Date(2014,01,04,16,15)



let time1=new Date()
let t1=time1.getTime()




const get = (uri) => {
  const options = {
    uri,
    headers: {
      'User-Agent': 'Request-Promise'
    },
    transform: (body) => {
      return cheerio.load(body)
    }
  }

  return request(options)
}
let i=1265102100000

  let tim=new Date(i)

 
  ngay=tim.getDate()+"-"+(tim.getMonth()+1)+"-"+tim.getFullYear();
  //console.log(ngay)


const intervalId = setInterval(() => {
if (counter>t1) {
    console.log('Done');
    clearInterval(intervalId);
  }else{
  let tim=new Date(counter)
  let ngay=tim.getDate()+"-"+(tim.getMonth()+1)+"-"+tim.getFullYear();
  console.log(ngay)
  get(`${mn}${ngay}.html`).then($ => {
    let a8=$('.content tbody td .giai8').text()
    let a7=$('.content tbody td .giai7').text()
    let a6=$('.content tbody td .giai6').text()
    let a5=$('.content tbody td .giai5').text()
    let a4=$('.content tbody td .giai4').text()
    let a3=$('.content tbody td .giai3').text()
    let a2=$('.content tbody td .giai2').text()
    let a1=$('.content tbody td .giai1').text()
    let a0=$('.content tbody td .giaidb').text()

    get(`${mt}${ngay}.html`).then($ => {
    let b8=$('.content tbody td .giai8').text()
    let b7=$('.content tbody td .giai7').text()
    let b6=$('.content tbody td .giai6').text()
    let b5=$('.content tbody td .giai5').text()
    let b4=$('.content tbody td .giai4').text()
    let b3=$('.content tbody td .giai3').text()
    let b2=$('.content tbody td .giai2').text()
    let b1=$('.content tbody td .giai1').text()
    let b0=$('.content tbody td .giaidb').text()

    get(`${mb}${ngay}.html`).then($ => {
    let c7=$('.content tbody td .giai7').eq(0).text()
    let c6=$('.content tbody td .giai6').eq(0).text()
    let c5=$('.content tbody td .giai5').eq(0).text()
    let c4=$('.content tbody td .giai4').eq(0).text()
    let c3=$('.content tbody td .giai3').eq(0).text()
    let c2=$('.content tbody td .giai2').eq(0).text()
    let c1=$('.content tbody td .giai1').eq(0).text()
    let c0=$('.content tbody td .giaidb').eq(0).text()
    
   let r={
    time:tim.getTime(),
    thu:tim.getDay(),
    kqmn:{
      22:{
        0:a0.substr(19,6),
        1:a1.substr(15,5),
        2:a2.substr(14,5),
        3:[a3.substr(13,5),a3.substr(18,5)],
        4:[a4.substr(13,5),a4.substr(18,5),a4.substr(23,5),a4.substr(28,5),a4.substr(33,5),a4.substr(38,5),a4.substr(43,5)],
        5:a5.substr(14,4),
        6:[a6.substr(14,4),a6.substr(18,4),a6.substr(22,4)],
        7:a7.substr(14,3),
        8:a8.substr(14,2)
      },
      23:{
        0:a0.substr(30,6),
        1:a1.substr(25,5),
        2:a2.substr(24,5),
        3:[a3.substr(28,5),a3.substr(33,5)],
        4:[a4.substr(53,5),a4.substr(58,5),a4.substr(63,5),a4.substr(68,5),a4.substr(73,5),a4.substr(78,5),a4.substr(83,5)],
        5:a5.substr(23,4),
        6:[a6.substr(31,4),a6.substr(35,4),a6.substr(39,4)],
        7:a7.substr(22,3),
        8:a8.substr(21,2)
      },
      24:{
        0:a0.substr(41,6),
        1:a1.substr(35,5),
        2:a2.substr(34,5),
        3:[a3.substr(43,5),a3.substr(48,5)],
        4:[a4.substr(93,5),a4.substr(98,5),a4.substr(103,5),a4.substr(108,5),a4.substr(113,5),a4.substr(118,5),a4.substr(123,5)],
        5:a5.substr(32,4),
        6:[a6.substr(48,4),a6.substr(52,4),a6.substr(56,4)],
        7:a7.substr(30,3),
        8:a8.substr(28,2)
      }
    },
    kqmt:{
      39:{
        0:b0.substr(19,6),
        1:b1.substr(15,5),
        2:b2.substr(14,5),
        3:[b3.substr(13,5),b3.substr(18,5)],
        4:[b4.substr(13,5),b4.substr(18,5),b4.substr(23,5),b4.substr(28,5),b4.substr(33,5),b4.substr(38,5),b4.substr(43,5)],
        5:b5.substr(14,4),
        6:[b6.substr(14,4),b6.substr(18,4),b6.substr(22,4)],
        7:b7.substr(14,3),
        8:b8.substr(14,2)
      },
      31:{
        0:b0.substr(30,6),
        1:b1.substr(25,5),
        2:b2.substr(24,5),
        3:[b3.substr(28,5),b3.substr(33,5)],
        4:[b4.substr(53,5),b4.substr(58,5),b4.substr(63,5),b4.substr(68,5),b4.substr(73,5),b4.substr(78,5),b4.substr(83,5)],
        5:b5.substr(23,4),
        6:[b6.substr(31,4),b6.substr(35,4),b6.substr(39,4)],
        7:b7.substr(22,3),
        8:b8.substr(21,2)
      }
    },
    kqmb:{
      51:{
        0:c0.substr(5,5),
        1:c1.substr(5,5),
        2:[c2.substr(5,5),c2.substr(10,5)],
        3:[c3.substr(5,5),c3.substr(10,5),c3.substr(15,5),c3.substr(20,5),c3.substr(25,5),c3.substr(30,5)],
        4:[c4.substr(5,4),c4.substr(9,4),c4.substr(13,4),c4.substr(17,4)],
        5:[c5.substr(5,4),c5.substr(9,4),c5.substr(13,4),c5.substr(17,4),c5.substr(21,4),c5.substr(25,4)],
        6:[c6.substr(5,3),c6.substr(8,3),c6.substr(11,3)],
        7:[c7.substr(5,2),c7.substr(7,2),c7.substr(9,2),c7.substr(11,2)]
      }
    }
   }
   db.create(r,(e,re)=>{if(e) console.log('e');})
   //db.updateOne({time:tim.getTime()},{$set:{mn:r.mn,mt:r.mt,mb:r.mb}},(e,r)=>{console.log(r)})
})
})
})
  counter += 86400000*7;
}
}, 3000)


