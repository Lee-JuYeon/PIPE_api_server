const express = require('express');
const router = express.Router();
const db = require('../mariadb/maria');

router.get('/:type', async function(req, res){
    try{
        if(req.params.type == "APT" || req.params.type == "APT_RANDOM" || req.params.type == "HOUSE_URBAN"){
            const sqlQuery = `select * from ${req.params.type}`;
            const result = await db.realestate_pool.query(sqlQuery);
            res.status(200).json(result)
        }else{
            res.status(400).send("we dont service it");
        }
    }catch(err){
        console.log(`routes, route_realestate, router.get(${req.params.type}) // Err : ${err}`);
        res.status(400).send(err.message);
    }
})


// router.post('/insertAPT', async function(req, res){
//     try {
//         const {
//             POST_DATE,
//             HOUSE_MANAGE_NO,
//             PBLANC_NO,
//             HOUSE_NM,
//             HOUSE_SECD,
//             HOUSE_SECD_NM,
//             HOUSE_DTL_SECD,
//             HOUSE_DTL_SECD_NM,
//             RENT_SECD,
//             RENT_SECD_NM,
//             SUBSCRPT_AREA_CODE,
//             SUBSCRPT_AREA_CODE_NM,
//             HSSPLY_ZIP,
//             HSSPLY_ADRES,
//             TOT_SUPLY_HSHLDCO,
//             RCRIT_PBLANC_DE,
//             RCEPT_BGNDE,
//             RCEPT_ENDDE,
//             SPSPLY_RCEPT_BGNDE,
//             SPSPLY_RCEPT_ENDDE,
//             GNRL_RNK1_CRSPAREA_RCEPT_PD,
//             GNRL_RNK1_ETC_GG_RCPTDE_PD,
//             GNRL_RNK1_ETC_AREA_RCPTDE_PD,
//             GNRL_RNK2_CRSPAREA_RCEPT_PD,
//             GNRL_RNK2_ETC_GG_RCPTDE_PD,
//             GNRL_RNK2_ETC_AREA_RCPTDE_PD,
//             PRZWNER_PRESNATN_DE,
//             CNTRCT_CNCLS_BGNDE,
//             CNTRCT_CNCLS_ENDDE,
//             HMPG_ADRES,
//             CNSTRCT_ENTRPS_NM,
//             MDHS_TELNO,
//             BSNS_MBY_NM,
//             MVN_PREARNGE_YM,
//             SPECLT_RDN_EARTH_AT,
//             MDAT_TRGET_AREA_SECD,
//             PARCPRC_ULS_AT,
//             IMPRMN_BSNS_AT,
//             PUBLIC_HOUSE_EARTH_AT,
//             LRSCL_BLDLND_AT,
//             NPLN_PRVOPR_PUBLIC_HOUSE_AT,
//             DETAIL_LIST
//         } = req.body;
        
//         const sqlQuery = `insert into APT (
//             POST_DATE,
//             HOUSE_MANAGE_NO,
//             PBLANC_NO,
//             HOUSE_NM,
//             HOUSE_SECD,
//             HOUSE_SECD_NM,
//             HOUSE_DTL_SECD,
//             HOUSE_DTL_SECD_NM,
//             RENT_SECD,
//             RENT_SECD_NM,
//             SUBSCRPT_AREA_CODE,
//             SUBSCRPT_AREA_CODE_NM,
//             HSSPLY_ZIP,
//             HSSPLY_ADRES,
//             TOT_SUPLY_HSHLDCO,
//             RCRIT_PBLANC_DE,
//             RCEPT_BGNDE,
//             RCEPT_ENDDE,
//             SPSPLY_RCEPT_BGNDE,
//             SPSPLY_RCEPT_ENDDE,
//             GNRL_RNK1_CRSPAREA_RCEPT_PD,
//             GNRL_RNK1_ETC_GG_RCPTDE_PD,
//             GNRL_RNK1_ETC_AREA_RCPTDE_PD,
//             GNRL_RNK2_CRSPAREA_RCEPT_PD,
//             GNRL_RNK2_ETC_GG_RCPTDE_PD,
//             GNRL_RNK2_ETC_AREA_RCPTDE_PD,
//             PRZWNER_PRESNATN_DE,
//             CNTRCT_CNCLS_BGNDE,
//             CNTRCT_CNCLS_ENDDE,
//             HMPG_ADRES,
//             CNSTRCT_ENTRPS_NM,
//             MDHS_TELNO,
//             BSNS_MBY_NM,
//             MVN_PREARNGE_YM,
//             SPECLT_RDN_EARTH_AT,
//             MDAT_TRGET_AREA_SECD,
//             PARCPRC_ULS_AT,
//             IMPRMN_BSNS_AT,
//             PUBLIC_HOUSE_EARTH_AT,
//             LRSCL_BLDLND_AT,
//             NPLN_PRVOPR_PUBLIC_HOUSE_AT,
//             DETAIL_LIST
//             ) values (
//             ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?
//             )`;
//         const result = await db.realestate_pool.query(sqlQuery, [
//             POST_DATE,
//             HOUSE_MANAGE_NO,
//             PBLANC_NO,
//             HOUSE_NM,
//             HOUSE_SECD,
//             HOUSE_SECD_NM,
//             HOUSE_DTL_SECD,
//             HOUSE_DTL_SECD_NM,
//             RENT_SECD,
//             RENT_SECD_NM,
//             SUBSCRPT_AREA_CODE,
//             SUBSCRPT_AREA_CODE_NM,
//             HSSPLY_ZIP,
//             HSSPLY_ADRES,
//             TOT_SUPLY_HSHLDCO,
//             RCRIT_PBLANC_DE,
//             RCEPT_BGNDE,
//             RCEPT_ENDDE,
//             SPSPLY_RCEPT_BGNDE,
//             SPSPLY_RCEPT_ENDDE,
//             GNRL_RNK1_CRSPAREA_RCEPT_PD,
//             GNRL_RNK1_ETC_GG_RCPTDE_PD,
//             GNRL_RNK1_ETC_AREA_RCPTDE_PD,
//             GNRL_RNK2_CRSPAREA_RCEPT_PD,
//             GNRL_RNK2_ETC_GG_RCPTDE_PD,
//             GNRL_RNK2_ETC_AREA_RCPTDE_PD,
//             PRZWNER_PRESNATN_DE,
//             CNTRCT_CNCLS_BGNDE,
//             CNTRCT_CNCLS_ENDDE,
//             HMPG_ADRES,
//             CNSTRCT_ENTRPS_NM,
//             MDHS_TELNO,
//             BSNS_MBY_NM,
//             MVN_PREARNGE_YM,
//             SPECLT_RDN_EARTH_AT,
//             MDAT_TRGET_AREA_SECD,
//             PARCPRC_ULS_AT,
//             IMPRMN_BSNS_AT,
//             PUBLIC_HOUSE_EARTH_AT,
//             LRSCL_BLDLND_AT,
//             NPLN_PRVOPR_PUBLIC_HOUSE_AT,
//             DETAIL_LIST
//         ]);

//         res.status(200).json(result);
//     }catch(err){
//         console.log(`routes, route_realestate, router.post(aptInsert) // Err : ${err}`);
//         res.status(400).send(err.message);
//     }
// })

// router.post('/insertTest', async function(req, res){
//     try{
//         const { test_name, test_title } = req.body;
//         const sqlQuery = 'insert into testTable (test_name, test_title) values (?,?)';
//         const result = await db.pool.query(sqlQuery, [test_name, test_title]);
        
//         res.status(200).json(result);
//     }catch(err){
//         console.log(`routes, route_realestate, router.post(insertTest) // Err : ${err}`);
//         res.status(400).send(err.message);
//     }
// })
module.exports = {
    router : router
}