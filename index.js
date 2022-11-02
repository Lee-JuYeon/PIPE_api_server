require("dotenv").config();

const axios = require('axios');
const express = require('express');
const PORT = process.env.PORT || '3001';
const app = express();


/*
Middle ware
*/
app.use(express.json());
app.use(express.urlencoded({extended : false}));

/*
Routes
*/
const routeRealestate = require('./routes/route_realestate');
app.use('/realestate', routeRealestate.router);

/*
Start listening
*/
app.get('/', (request, response) => {
    response.status(200).send("ssssaaaaaa");
});

app.listen(PORT, () => {
    console.log(`${PORT}번 포트로 리스닝중.`)
});


const REALESTATE_APT = require('./api/realestate/apt/getAptList');
REALESTATE_APT.setListAtDB(axios);

// const settingRealEstate_Apt_Random = REALESTATE_APT_RANDOME.getList(axios);
// const settingRealEstate_Urban = REALESTATE_URBAN.getList(axios);

// console.log(settingRealEstate_Urban);


/*

// apt / apt 무순위, 잔여세대 / 오피스텔, 도시형, 민간임대
const aptDetail = {
    uri: "https://api.odcloud.kr/api/ApplyhomeInfoDetailSvc/v1/getAPTLttotPblancDetail",
    qs:{
        page:1,
        perPage:10000,
        serviceKey:process.env.PIPE_API_HOME_KEY
    }
};

// apt / apt 무순위, 잔여세대 / 오피스텔, 도시형, 민간임대
const aptRandomEtcDetail = {
    uri: "https://api.odcloud.kr/api/ApplyhomeInfoDetailSvc/v1/getRemndrLttotPblancDetail",
    qs:{
        page:1,
        perPage:10000,
        serviceKey:process.env.PIPE_API_HOME_KEY
    }
};

// apt / apt 무순위, 잔여세대 / 오피스텔, 도시형, 민간임대
const housingDetail = {
    uri: "https://api.odcloud.kr/api/ApplyhomeInfoDetailSvc/v1/getUrbtyOfctlLttotPblancDetail",
    qs:{
        page:1,
        perPage:10000,
        serviceKey:process.env.PIPE_API_HOME_KEY
    }
};

// 주택형별 apt / apt 무순위, 잔여세대 / 오피스텔, 도시형, 민간임대
const aptMdl = {
    uri: "https://api.odcloud.kr/api/ApplyhomeInfoDetailSvc/v1/getAPTLttotPblancMdl",
    qs:{
        page:1,
        perPage:10000,
        serviceKey:process.env.PIPE_API_HOME_KEY
    }
};

// 주택형별 apt / apt 무순위, 잔여세대 / 오피스텔, 도시형, 민간임대
const aptRandomEtcMdl = {
    uri: "https://api.odcloud.kr/api/ApplyhomeInfoDetailSvc/v1/getRemndrLttotPblancMdl",
    qs:{
        page:1,
        perPage:10000,
        serviceKey:process.env.PIPE_API_HOME_KEY
    }
};

// 주택형별 apt / apt 무순위, 잔여세대 / 오피스텔, 도시형, 민간임대
const housingMdl = {
    uri: "https://api.odcloud.kr/api/ApplyhomeInfoDetailSvc/v1/getUrbtyOfctlLttotPblancMdl",
    qs:{
        page:1,
        perPage:10000,
        serviceKey:process.env.PIPE_API_HOME_KEY
    }
};

*/