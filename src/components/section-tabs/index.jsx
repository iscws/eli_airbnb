import ScrollView from '@/base-ui/scroll-view';
import classNames from 'classnames';
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style';

const SectionTab = memo((props) => {
    const { tabNames = [], clickNameHandle } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    function itemClickHandle(index, name) {
        setCurrentIndex(index);
        clickNameHandle(name);
    }

    return (
        <TabsWrapper>
            <ScrollView>
                {
                    tabNames.map((item, index) => {
                        return (<div
                            className={classNames("item", { active: index === currentIndex })}
                            key={index}
                            onClick={e => itemClickHandle(index, item)}> {item}
                        </div>)
                    })
                }
            </ScrollView>
        </TabsWrapper >
    )
})

SectionTab.propTypes = {
    tabNames: PropTypes.array,
}

export default SectionTab