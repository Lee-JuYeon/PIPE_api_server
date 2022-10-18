const URBAN_GET = function(getAxios){
    return getAxios.get(
        process.env.PIPE_API_HOME_URL_URBAN, 
        {
            params: {
                page: 1,
                perPage : 10000,
                serviceKey : process.env.PIPE_API_HOME_DECODED_KEY
            }
        }
    )
};

const URBAN_TYPE_GET = function(getAxios) {
    return getAxios.get(
        process.env.PIPE_API_HOME_URL_URBAN_TYPE, 
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
            URBAN_GET(axios),
            URBAN_TYPE_GET(axios)
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
                            HOUSE_DTL_SECD : element.HOUSE_DTL_SECD,
                            HOUSE_DTL_SECD_NM : element.HOUSE_DTL_SECD_NM,
                            SEARCH_HOUSE_SECD : element.SEARCH_HOUSE_SECD,
                            HSSPLY_ZIP : element.HSSPLY_ZIP,
                            HSSPLY_ADRES : element.HSSPLY_ADRES,
                            TOT_SUPLY_HSHLDCO : element.TOT_SUPLY_HSHLDCO,
                            RCRIT_PBLANC_DE : element.RCRIT_PBLANC_DE,
                            SUBSCRPT_RCEPT_BGNDE : element.SUBSCRPT_RCEPT_BGNDE,
                            SUBSCRPT_RCEPT_ENDDE : element.SUBSCRPT_RCEPT_ENDDE,
                            PRZWNER_PRESNATN_DE : element.PRZWNER_PRESNATN_DE,
                            CNTRCT_CNCLS_BGNDE : element.CNTRCT_CNCLS_BGNDE,
                            CNTRCT_CNCLS_ENDDE : element.CNTRCT_CNCLS_ENDDE,
                            HMPG_ADRES : element.HMPG_ADRES,
                            BSNS_MBY_NM	 : element.BSNS_MBY_NM	,
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
                                        GP : mapItem.GP,
                                        TP : mapItem.TP,
                                        EXCLUSE_AR : mapItem.EXCLUSE_AR,
                                        SUPLY_HSHLDCO : mapItem.SUPLY_HSHLDCO,
                                        SUPLY_AMOUNT : mapItem.SUPLY_AMOUNT,
                                        SUBSCRPT_REQST_AMOUNT : mapItem.SUBSCRPT_REQST_AMOUNT
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
            console.log(`api, realestate, house_urban, getHouseUrban, getList // Err : ${err}`);
        })
        .finally(() => {
            console.log(emptyHomeList);
            return emptyHomeList; 
        })
};

module.exports = {
    getList : getList
}