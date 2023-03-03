import ScrollView from '@/base-ui/scroll-view';
import LongForItem from '@/components/longfor-item';
import SectionHeader from '@/components/section-header';
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongForWrapper } from './style';

const HomeLongFor = memo((props) => {
    const { infoData } = props;
    console.log(infoData.list);
    return (
        <LongForWrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <div className="content">
                <ScrollView >
                    {
                        infoData?.list?.map((item,index) =>
                            <LongForItem itemData={item} key={index}/>
                        )
                    }
                </ScrollView>
            </div>
        </LongForWrapper>
    )
})

HomeLongFor.propTypes = {
    infoData: PropTypes.object
}

export default HomeLongFor