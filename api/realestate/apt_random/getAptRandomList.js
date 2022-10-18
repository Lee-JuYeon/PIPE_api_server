const APT_RANDOM_GET = function(getAxios){
    return getAxios.get(
        process.env.PIPE_API_HOME_URL_APT_RANDOME, 
        {
            params: {
                page: 1,
                perPage : 10000,
                serviceKey : process.env.PIPE_API_HOME_DECODED_KEY
            }
        }
    )
};

const APT_RANDOM_TYPE_GET = function(getAxios) {
    return getAxios.get(
        process.env.PIPE_API_HOME_URL_APT_RANDOME_TYPE, 
        {
            params: {
                page: 1,
                perPage : 10000,
                serviceKey : process.env.PIPE_API_HOME_DECODED_KEY
            }
        }
    )
};

const getList = function(axios){
    var emptyHomeList = [];
    axios
        .all([
            APT_RANDOM_GET(axios),
            APT_RANDOM_TYPE_GET(axios)
        ])
        .then(
            axios
                .spread((homeList, homeTypeList) => {
                    homeList.data.data.forEach(element => {
                        const item = {
                            HOUSE_MANAGE_NO : element.HOUSE_MANAGE_NO,
                            PBLANC_NO : element.PBLANC_NO,
                            HOUSE_NM : element.HOUSE_NM,
                            HOUSE_SECD : element.HOUSE_SECD,
                            HOUSE_SECD_NM : element.HOUSE_SECD_NM,
                            HSSPLY_ZIP : element.HSSPLY_ZIP,
                            HSSPLY_ADRES : element.HSSPLY_ADRES,
                            TOT_SUPLY_HSHLDCO : element.TOT_SUPLY_HSHLDCO,
                            RCRIT_PBLANC_DE : element.RCRIT_PBLANC_DE,
                            SUBSCRPT_RCEPT_BGNDE : element.SUBSCRPT_RCEPT_BGNDE,
                            SUBSCRPT_RCEPT_ENDDE : element.SUBSCRPT_RCEPT_ENDDE,
                            SPSPLY_RCEPT_BGNDE : element.SPSPLY_RCEPT_BGNDE,
                            SPSPLY_RCEPT_ENDDE : element.SPSPLY_RCEPT_ENDDE,
                            GNRL_RCEPT_BGNDE : element.GNRL_RCEPT_BGNDE,
                            GNRL_RCEPT_ENDDE : element.GNRL_RCEPT_ENDDE,
                            PRZWNER_PRESNATN_DE : element.PRZWNER_PRESNATN_DE,
                            CNTRCT_CNCLS_BGNDE : element.CNTRCT_CNCLS_BGNDE,
                            CNTRCT_CNCLS_ENDDE : element.CNTRCT_CNCLS_ENDDE,
                            HMPG_ADRES : element.HMPG_ADRES,
                            BSNS_MBY_NM : element.BSNS_MBY_NM,
                            MDHS_TELNO : element.MDHS_TELNO,
                            MVN_PREARNGE_YM : element.MVN_PREARNGE_YM,
                            DETAIL_LIST : homeTypeList.data.data
                                .filter(filterItem => 
                                    element.HOUSE_MANAGE_NO == filterItem.HOUSE_MANAGE_NO && element.PBLANC_NO == filterItem.PBLANC_NO
                                )
                                .map(mapItem => {
                                    const jsonItem = {
                                        HOUSE_MANAGE_NO	 : mapItem.HOUSE_MANAGE_NO	,
                                        PBLANC_NO : mapItem.PBLANC_NO,
                                        MODEL_NO : mapItem.MODEL_NO,
                                        HOUSE_TY : mapItem.HOUSE_TY,
                                        SUPLY_AR : mapItem.SUPLY_AR,
                                        SUPLY_HSHLDCO : mapItem.SUPLY_HSHLDCO,
                                        SPSPLY_HSHLDCO : mapItem.SPSPLY_HSHLDCO,
                                        LTTOT_TOP_AMOUNT : mapItem.LTTOT_TOP_AMOUNT
                                    };
                                    // console.log(jsonItem);
                                    return jsonItem
                                })
                        };
                        emptyHomeList.push(item);
                    });
                    // console.log(emptyHomeList);
                })
        )
        .catch((err) => {
            console.log(`api, realestate, apt_random, getAptRandom, getList // Err : ${err}`)
        })
        .finally(() => {
            console.log(emptyHomeList);
            return emptyHomeList; 
        })
};

module.exports = {
    getList : getList
}