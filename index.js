require("dotenv").config();
var axios = require('axios');
var REALESTATE = require('./api/realestate/api_realestate');

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

REALESTATE.getList(axios);
