let db = require('../src/models').Kq

db.deleteMany({thu:{$lt:8}},(e,r)=>{if(e){console.log(e)}if(r){console.log(r)}})
//db.deleteOne({_id:"5d6929c900b20a31ba573b89"},(e,r)=>{if(e){console.log(e)};if(r){console.log(r)}})
//db.create({time:1567156500000},(e,r)=>{if(e){console.log(e)}if(r){console.log(r)}})