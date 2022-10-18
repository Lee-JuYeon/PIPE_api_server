
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

const getList = function(axios){
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
                        const item = {
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
                    });
                    // console.log(emptyHomeList);
                })
        )
        .catch((err) => {
            console.log(`api, realestate, apt, getAptList, getList, then-catch // Err : ${err}`)
        })
        .finally(() => {
            return emptyHomeList; 
        })
};



module.exports = {
    getList : getList
}