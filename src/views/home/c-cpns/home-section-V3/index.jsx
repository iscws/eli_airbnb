import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionWrapper } from './style';

import SectionHeader from '@/components/section-header';
import ScrollView from '@/base-ui/scroll-view';
import RoomItem from '@/components/room-item';

const HomeSectionV3 = memo((props) => {
    const { infoData } = props;
    return (
        <HomeSectionWrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>

            <div className="room-list">
                <ScrollView>
                    {
                        infoData.list.map((item, index) => {
                            return <RoomItem key={index} itemData={item} itemWidth="25%"></RoomItem>
                        })
                    }
                </ScrollView>
            </div>
        </HomeSectionWrapper>
    )
})

HomeSectionV3.propTypes = {
    infoData: PropTypes.object,
}

export default HomeSectionV3