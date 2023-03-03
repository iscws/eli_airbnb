import React, { memo } from 'react'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-V1'
import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import HomeSectionV2 from './c-cpns/home-section-V2'
import { isEmptyO } from '@/utils/is-empty-object'
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-V3'


const Home = memo(() => {
    // 获取数据
    const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longForInfo, plusInfo } = useSelector(state => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo,
        recommendInfo: state.home.recommendInfo,
        longForInfo: state.home.longForInfo,
        plusInfo: state.home.plusInfo,
    }), shallowEqual)


    // 派发异步请求，获取数据
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchHomeDataAction());
    }, [dispatch])

    // const { title, list } = goodPriceInfo;
    return (
        <HomeWrapper>
            <HomeBanner />
            <div className="content">

                {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo}></HomeSectionV2>}
                {isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}></HomeSectionV2>}

                {isEmptyO(longForInfo) && <HomeLongfor infoData={longForInfo}></HomeLongfor>}

                {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>}
                {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>}
                {isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo}></HomeSectionV3>}

            </div>
        </HomeWrapper>

    )
})

export default Home