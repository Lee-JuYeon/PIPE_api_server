var Models = require('./../../model/models');


var getList = function(axios){
    axios
    .all([
        axios.get(
            process.env.PIPE_API_HOME_URL_APT, 
            {
                params: {
                    page: 1,
                    perPage : 10000,
                    serviceKey : process.env.PIPE_API_HOME_DECODED_KEY
                }
            }
        ),
        axios.get(
            process.env.PIPE_API_HOME_URL_APT_TYPE, 
            {
                params: {
                    page: 1,
                    perPage : 10000,
                    serviceKey : process.env.PIPE_API_HOME_DECODED_KEY
                }
            }
        )
    ])
    .then(
        axios.spread((homeList, homeTypeList) => {
            var emptyHomseList = [];
            homeList.data.data.forEach(element => {
                var emptyHomeTypeList = [];
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
                    DETAIL_LIST : homeTypeList.data.data.map(function(item) {
                        if(element.HOUSE_MANAGE_NO == item.HOUSE_MANAGE_NO && element.PBLANC_NO == item.PBLANC_NO){
                            const typeItem = {
                                HOUSE_MANAGE_NO : item.HOUSE_MANAGE_NO,
                                PBLANC_NO : item.PBLANC_NO,
                                MODEL_NO : item.MODEL_NO,
                                HOUSE_TY : item.HOUSE_TY,
                                SUPLY_AR : item.SUPLY_AR,
                                SUPLY_HSHLDCO : item.SUPLY_HSHLDCO,
                                SPSPLY_HSHLDCO : item.SPSPLY_HSHLDCO,
                                MNYCH_HSHLDCO : item.MNYCH_HSHLDCO,
                                NWWDS_HSHLDCO : item.NWWDS_HSHLDCO,
                                LFE_FRST_HSHLDCO : item.LFE_FRST_HSHLDCO,
                                OLD_PARNTS_SUPORT_HSHLDCO : item.OLD_PARNTS_SUPORT_HSHLDCO,
                                INSTT_RECOMEND_HSHLDCO : item.INSTT_RECOMEND_HSHLDCO,
                                ETC_HSHLDCO : item.ETC_HSHLDCO,
                                TRANSR_INSTT_ENFSN_HSHLDCO : item.TRANSR_INSTT_ENFSN_HSHLDCO,
                                LTTOT_TOP_AMOUNT : item.LTTOT_TOP_AMOUNT,
                            }
                            return emptyHomeTypeList.push(typeItem);
                        }}
                    )
                }
                emptyHomseList.push(item);
            });
            console.log(emptyHomseList)
        })
    )
    .catch((err) => {
        console.log(err);
    });
};



module.exports = {
    getList : getList
}