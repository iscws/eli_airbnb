import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex } = props;
  const contentRef = useRef();
  useEffect(() => {
    // 获取selectIndex对应的Item
    const selectItemEl = contentRef.current.children[selectIndex]
    const itemLeft = selectItemEl.offsetLeft;
    const itemWidth = selectItemEl.clientWidth;

    // content宽度
    const contentWidth = contentRef.current.clientWidth;
    // 获取selectIndex要滚动的距离
    const contentScroll = contentRef.current.scrollWidth;
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5;

    const totalDistance = contentScroll - contentWidth;
    if (distance < 0) distance = 0;
    if (distance > totalDistance) distance = totalDistance;

    contentRef.current.style.transform = `translate(${-distance}px)`

    // 获取selectIndex的滚动距离
  }, [selectIndex])
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

export default Indicator