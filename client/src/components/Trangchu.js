import React from "react";
import Helmet from "react-helmet"
import {MNT,MB} from '../styled/Table'
const Home=()=>{
const fakeData={
    "time": "1575450900000",
    "thu": 3,
    "matinh": [
        "10",
        "11",
        "12",
        "30",
        "31",
        "48"
      ],
    "kqmn": [
        "84",
        "769",
        "4306",
        "3521",
        "1849",
        "8501",
        "78175",
        "07226",
        "36765",
        "21505",
        "35723",
        "22784",
        "76867",
        "02657",
        "07623",
        "28784",
        "70241",
        "285395",
        "51",
        "947",
        "9345",
        "4018",
        "9721",
        "7083",
        "20013",
        "60857",
        "21056",
        "76867",
        "51851",
        "55724",
        "27089",
        "93490",
        "27460",
        "07992",
        "60887",
        "378572",
        "02",
        "099",
        "3542",
        "9730",
        "7891",
        "5953",
        "92582",
        "43202",
        "95762",
        "85004",
        "84968",
        "14418",
        "29760",
        "05525",
        "03250",
        "70005",
        "57271",
        "858020"
    ],
    "kqmb": [
        "79119",
        "92770",
        "19232",
        "66664",
        "24551",
        "69573",
        "55801",
        "73602",
        "23198",
        "28261",
        "9092",
        "6077",
        "2741",
        "8460",
        "4819",
        "1304",
        "7816",
        "9913",
        "4435",
        "9607",
        "180",
        "473",
        "531",
        "39",
        "55",
        "93",
        "82"
    ]
}

    return (
        <div>
            <Helmet>
                <title>Home Page</title>
                <meta name="description" content="This is description HOME PAGE" />
            </Helmet>

          <MB {...fakeData}/>
          <MNT {...fakeData}/>
        </div>
    );
};

export default Home
