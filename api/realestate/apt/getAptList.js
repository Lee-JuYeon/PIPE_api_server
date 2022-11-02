
const APT_GET = function(getAxios){
    return getAxios.get(
        process.env.PIPE_API_HOME_URL_APT, 
        {
            params: {
                page: 1,
                perPage : 10000,
                serviceKey : process.env.PIPE_API_HOME_DECODED_KEY
            }
        }
    )
};

const APT_TYPE_GET = function(getAxios) {
    return getAxios.get(
        process.env.PIPE_API_HOME_URL_APT_TYPE, 
        {
            params: {
                page: 1,
                perPage : 10000,
                serviceKey : process.env.PIPE_API_HOME_DECODED_KEY
            }
        }
    )
};

const getList = function(axios, db){
    var emptyHomeList = [];
    axios
        .all([
            APT_GET(axios),
            APT_TYPE_GET(axios)
        ])
        .then(
            axios
                .spread((homeList, homeTypeList) => {
                    homeList.data.data.forEach(element => {
                        let ts = Date.now();
                        let date_ob = new Date(ts);
                        let date = date_ob.getDate();
                        let month = date_ob.getMonth() + 1;
                        let year = date_ob.getFullYear();
                        let currentDate = year + "." + month + "." + date;

                        const item = {
                            POST_DATE : currentDate,
                            HOUSE_MANAGE_NO : element.HOUSE_MANAGE_NO,
                            PBLANC_NO : element.PBLANC_NO,
                            HOUSE_NM : element.HOUSE_NM,
                            HOUSE_SECD : element.HOUSE_SECD,
                            HOUSE_SECD_NM : element.HOUSE_SECD_NM,
                            HOUSE_DTL_SECD : element.HOUSE_DTL_SECD,
                            HOUSE_DTL_SECD_NM : element.HOUSE_DTL_SECD_NM,
                            RENT_SECD : element.RENT_SECD,
                            RENT_SECD_NM : element.RENT_SECD_NM,
                            SUBSCRPT_AREA_CODE : element.SUBSCRPT_AREA_CODE,
                            SUBSCRPT_AREA_CODE_NM : element.SUBSCRPT_AREA_CODE_NM,
                            HSSPLY_ZIP : element.HSSPLY_ZIP,
                            HSSPLY_ADRES : element.HSSPLY_ADRES,
                            TOT_SUPLY_HSHLDCO : element.TOT_SUPLY_HSHLDCO,
                            RCRIT_PBLANC_DE : element.RCRIT_PBLANC_DE,
                            RCEPT_BGNDE : element.RCEPT_BGNDE,
                            RCEPT_ENDDE : element.RCEPT_ENDDE,
                            SPSPLY_RCEPT_BGNDE : element.SPSPLY_RCEPT_BGNDE,
                            SPSPLY_RCEPT_ENDDE : element.SPSPLY_RCEPT_ENDDE,
                            GNRL_RNK1_CRSPAREA_RCEPT_PD : element.GNRL_RNK1_CRSPAREA_RCEPT_PD,
                            GNRL_RNK1_ETC_GG_RCPTDE_PD : element.GNRL_RNK1_ETC_GG_RCPTDE_PD,
                            GNRL_RNK1_ETC_AREA_RCPTDE_PD : element.GNRL_RNK1_ETC_AREA_RCPTDE_PD,
                            GNRL_RNK2_CRSPAREA_RCEPT_PD : element.GNRL_RNK2_CRSPAREA_RCEPT_PD,
                            GNRL_RNK2_ETC_GG_RCPTDE_PD : element.GNRL_RNK2_ETC_GG_RCPTDE_PD,
                            GNRL_RNK2_ETC_AREA_RCPTDE_PD : element.GNRL_RNK2_ETC_AREA_RCPTDE_PD,
                            PRZWNER_PRESNATN_DE : element.PRZWNER_PRESNATN_DE,
                            CNTRCT_CNCLS_BGNDE : element.CNTRCT_CNCLS_BGNDE,
                            CNTRCT_CNCLS_ENDDE : element.CNTRCT_CNCLS_ENDDE,
                            HMPG_ADRES : element.HMPG_ADRES,
                            CNSTRCT_ENTRPS_NM : element.CNSTRCT_ENTRPS_NM,
                            MDHS_TELNO : element.MDHS_TELNO,
                            BSNS_MBY_NM : element.BSNS_MBY_NM,
                            MVN_PREARNGE_YM : element.MVN_PREARNGE_YM,
                            SPECLT_RDN_EARTH_AT : element.SPECLT_RDN_EARTH_AT,
                            MDAT_TRGET_AREA_SECD : element.MDAT_TRGET_AREA_SECD,
                            PARCPRC_ULS_AT : element.PARCPRC_ULS_AT,
                            IMPRMN_BSNS_AT : element.IMPRMN_BSNS_AT,
                            PUBLIC_HOUSE_EARTH_AT : element.PUBLIC_HOUSE_EARTH_AT,
                            LRSCL_BLDLND_AT : element.LRSCL_BLDLND_AT,
                            NPLN_PRVOPR_PUBLIC_HOUSE_AT : element.NPLN_PRVOPR_PUBLIC_HOUSE_AT,
                            DETAIL_LIST : homeTypeList.data.data
                                .filter(filterItem => 
                                    element.HOUSE_MANAGE_NO == filterItem.HOUSE_MANAGE_NO && element.PBLANC_NO == filterItem.PBLANC_NO
                                )
                                .map(mapItem => {
                                    const jsonItem = {
                                        MODEL_NO : mapItem.MODEL_NO,
                                        PBLANC_NO : mapItem.PBLANC_NO,
                                        ETC_HSHLDCO : mapItem.ETC_HSHLDCO,
                                        HOUSE_MANAGE_NO : mapItem.HOUSE_MANAGE_NO,
                                        HOUSE_TY : mapItem.HOUSE_TY,
                                        INSTT_RECOMEND_HSHLDCO : mapItem.INSTT_RECOMEND_HSHLDCO,
                                        LFE_FRST_HSHLDCO : mapItem.LFE_FRST_HSHLDCO,
                                        LTTOT_TOP_AMOUNT : mapItem.LTTOT_TOP_AMOUNT,
                                        MNYCH_HSHLDCO : mapItem.MNYCH_HSHLDCO,
                                        NWWDS_HSHLDCO : mapItem.NWWDS_HSHLDCO,
                                        OLD_PARNTS_SUPORT_HSHLDCO : mapItem.OLD_PARNTS_SUPORT_HSHLDCO,
                                        SPSPLY_HSHLDCO : mapItem.SPSPLY_HSHLDCO,
                                        SUPLY_AR : mapItem.SUPLY_AR,
                                        SUPLY_HSHLDCO : mapItem.SUPLY_HSHLDCO,
                                        TRANSR_INSTT_ENFSN_HSHLDCO : mapItem.TRANSR_INSTT_ENFSN_HSHLDCO
                                    };
                                    // console.log(jsonItem);
                                    return jsonItem
                                })
                        };
                        emptyHomeList.push(item);
                        setItemAtDB(item, db);
                    });
                    // console.log(emptyHomeList);
                })
        )
        .catch((err) => {
            console.log(`api, realestate, apt, getAptList, getList, then-catch // Err : ${err}`)
        })
        .finally(() => {
            console.log(`결과 : ${emptyHomeList.length}`);
            // const value = ''
            // const query = 'insert into tableName (title, title2, title3) values (?, ?, ?)';
            // const rows = await db.query(query, value)
        })
};

async function setItemAtDB(item, db){
    try{
        const sqlData = [
            item.POST_DATE,
            item.HOUSE_MANAGE_NO, 
            item.PBLANC_NO, 
            item.HOUSE_NM,
            item.HOUSE_SECD,
            item.HOUSE_SECD_NM,
            item.HOUSE_DTL_SECD,
            item.HOUSE_DTL_SECD_NM,
            item.RENT_SECD,
            item.RENT_SECD_NM,
            item.SUBSCRPT_AREA_CODE,
            item.SUBSCRPT_AREA_CODE_NM,
            item.HSSPLY_ZIP,
            item.HSSPLY_ADRES,
            item.TOT_SUPLY_HSHLDCO, 
            item.RCRIT_PBLANC_DE,
            item.RCEPT_BGNDE,
            item.RCEPT_ENDDE,
            item.SPSPLY_RCEPT_BGNDE,
            item.SPSPLY_RCEPT_ENDDE,
            item.GNRL_RNK1_CRSPAREA_RCEPT_PD,
            item.GNRL_RNK1_ETC_GG_RCPTDE_PD,
            item.GNRL_RNK1_ETC_AREA_RCPTDE_PD,
            item.GNRL_RNK2_CRSPAREA_RCEPT_PD,
            item.GNRL_RNK2_ETC_GG_RCPTDE_PD,
            item.GNRL_RNK2_ETC_AREA_RCPTDE_PD,
            item.PRZWNER_PRESNATN_DE,
            item.CNTRCT_CNCLS_BGNDE,
            item.CNTRCT_CNCLS_ENDDE,
            item.HMPG_ADRES,  
            item.CNSTRCT_ENTRPS_NM, 
            item.MDHS_TELNO,
            item.BSNS_MBY_NM,
            item.MVN_PREARNGE_YM,
            item.SPECLT_RDN_EARTH_AT,
            item.MDAT_TRGET_AREA_SECD,
            item.PARCPRC_ULS_AT,
            item.IMPRMN_BSNS_AT,
            item.PUBLIC_HOUSE_EARTH_AT,
            item.LRSCL_BLDLND_AT,
            item.NPLN_PRVOPR_PUBLIC_HOUSE_AT,
            item.DETAIL_LIST
        ];
        const sqlQuery = 'insert into testTable (test_name, test_title) values (?, ?)';
        // const reesult = await db.realestate_pool.query(sqlQuery, sqlData);        
    }catch(err){
        console.log(`api, realestate, apt, getAptList, setItemAtDB // Err : ${err}`);
    }
}

function setListAtDB(axios, db){
    getList(axios);
}


module.exports = {
    getList : getList,
    setListAtDB : setListAtDB
}