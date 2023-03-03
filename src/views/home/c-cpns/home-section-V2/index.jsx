import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'

import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTab from '@/components/section-tabs'
import { HomeSectionV2Wrapper } from './style'
import SectionFooter from '@/components/section-footer'


const HomeSectionV2 = memo((props) => {
    const { infoData } = props;

    const initName = Object.keys(infoData.dest_list ?? {})[0] ?? '';
    // console.log(Object.keys(infoData.dest_list ?? {})[0] ?? '');
    const [name, setName] = useState(initName);

    const clickNameHandle = useCallback((name) => {
        setName(name);
    }, [])
    const tabNames = infoData.dest_address?.map(item => item.name);

    return (
        <HomeSectionV2Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <SectionTab tabNames={tabNames} clickNameHandle={clickNameHandle} />
            <SectionRooms roomList={infoData.dest_list[name]} itemWidth="33.3%" />
            <SectionFooter name={name} />
        </HomeSectionV2Wrapper>
    )
})

HomeSectionV2.propTypes = {
    infoData: PropTypes.object,
}

export default HomeSectionV2