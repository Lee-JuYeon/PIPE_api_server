var axios = require('axios');

var REALESTATE_APT = require('./apt/getAptList');
var REALESTATE_APT_RANDOME = require('./apt_random/getAptRandomList');
var REALESTATE_URBAN = require('./house_urban/getHouseUrbanList');

var db = require('./../../mariadb/maria');

// REALESTATE_APT.getList(axios);
// REALESTATE_APT_RANDOME.getList(axios);
// REALESTATE_URBAN.getList(axios);

async function insertDataInDB(){
    try{
        const query = 'select * from testTable';
        await db.pool.query(query);
    }catch(err){
        console.log(`api, api_realestate.js // Error ${err}`);
    }
}

async function getREALESTATE_APTdataFromDB(){
    try{
        REALESTATE_APT.getList(axios);
        // const query = 'select * from testTable';
        // const result = await db.pool.query(query);
        // return result;

    }catch(err){
        console.log(`api, api_realestate.js, getREALESTATE_APTdataFromDB // Err : ${err}`)
    }
}

async function getREALESTATE_APT_RANDOMEdataFromDB(){
    try{
        const query = 'select * from testTable';
        const result = await db.pool.query(query);
        return result;
    }catch(err){
        console.log(`api, api_realestate.js, getREALESTATE_APT_RANDOMEdataFromDB // Err : ${err}`)
    }
}

async function getREALESTATE_URBANdataFromDB(){
    try{
        const query = 'select * from testTable';
        const result = await db.pool.query(query);
        return result;
    }catch(err){
        console.log(`api, api_realestate.js, getREALESTATE_URBANdataFromDB // Err : ${err}`)
    }
}

getREALESTATE_APTdataFromDB();
