import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeRecommendData, getLongForData, getPlusData } from "@/services/modules/home";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk("fetchHomeData", (payload, { dispatch }) => {
    getHomeGoodPriceData().then(res => {
        dispatch(changeGoodPriceInfoAction(res))
    });
    // 获取高性价比信息
    getHomeHighScoreData().then(res => {
        dispatch(changeHighScoreInfoAction(res))
    })
    // 获取折扣信息
    getHomeDiscountData().then(res => {
        dispatch(changeDiscountInfoAction(res))
    })

    getHomeRecommendData().then(res => {
        dispatch(changeRecommendInfoAction(res))
    })

    getLongForData().then(res => {
        dispatch(changeLongForInfoAction(res));
    })

    getPlusData().then(res => {
        dispatch(changePlusInfoAction(res));
    })
})

const homeSlice = createSlice({
    name: "initTest",
    initialState: {
        goodPriceInfo: {},
        highScoreInfo: {},
        discountInfo: {},
        recommendInfo: {},
        longForInfo: {},
        plusInfo: {},
    }, reducers: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload;
        },
        changeHighScoreInfoAction(state, { payload }) {
            state.highScoreInfo = payload;
        },
        changeDiscountInfoAction(state, { payload }) {
            state.discountInfo = payload;
        },
        changeRecommendInfoAction(state, { payload }) {
            state.recommendInfo = payload;
        },
        changeLongForInfoAction(state, { payload }) {
            state.longForInfo = payload;
        },
        changePlusInfoAction(state, { payload }) {
            state.plusInfo = payload;
        }
    }
})

export const { changeGoodPriceInfoAction, changeHighScoreInfoAction, changeDiscountInfoAction, changeRecommendInfoAction, changeLongForInfoAction, changePlusInfoAction } = homeSlice.actions
export default homeSlice.reducer