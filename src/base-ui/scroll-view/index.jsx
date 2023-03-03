import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import React, { memo, useEffect, useState } from 'react'
import { useRef } from 'react';
import { ScrollWrapper } from './style'

const ScrollView = memo((props) => {
    const { children } = props;
    const [isRightShow, setRightShow] = useState(false);
    const [isLeftShow, setLeftShow] = useState(false);
    const [postIndex, setPostIndex] = useState(0);
    const totalDistanceRef = useRef();
    const scrollContentRef = useRef();
    useEffect(() => {
        const scrollWidth = scrollContentRef.current.scrollWidth;
        const clientWidth = scrollContentRef.current.clientWidth;
        const totalDistance = scrollWidth - clientWidth;
        totalDistanceRef.current = totalDistance;
        setRightShow(totalDistance > 0);

    }, [children])

    function controlClickHandle(isRight) {
        const newIndex = isRight ? postIndex + 1 : postIndex - 1;
        setPostIndex(newIndex);
        const scrollOffsetLeft = scrollContentRef.current.children[newIndex].offsetLeft;
        scrollContentRef.current.style.transform = `translateX(-${scrollOffsetLeft}px)`;
        setRightShow(totalDistanceRef.current > scrollOffsetLeft);
        setLeftShow(scrollOffsetLeft > 0);
        setRightShow(totalDistanceRef.current > scrollOffsetLeft);

    }

    return (
        <ScrollWrapper >
            {isLeftShow && <div className='control left' onClick={e => controlClickHandle(false)}><IconArrowLeft /></div>}

            {isRightShow && <div className='control right' onClick={e => controlClickHandle(true)}><IconArrowRight /></div>}

            <div className="scroll">
                <div className='scroll-content' ref={scrollContentRef}>
                    {children}
                </div>
            </div>


        </ScrollWrapper >
    )
})

export default ScrollView