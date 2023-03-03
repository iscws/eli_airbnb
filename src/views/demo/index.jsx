import Indicator from '@/base-ui/indicator'
import React, { memo, useState } from 'react'
import classnames from 'classnames'
import { DemoWrapper } from './style'

const Demo = memo(() => {
    const names = ["abc", "cba", "nba", "jsu", "gdut", "nsu"]
    const [selectIndex, setSelectIndex] = useState(0);

    function toggleClickHandle(isNext = true, ) {
        let newIndex = isNext ? (selectIndex + 1) : (selectIndex - 1);
        if (newIndex < 0) newIndex = names.length - 1;
        if (newIndex > names.length - 1) newIndex = 0;
        setSelectIndex(newIndex);

    }

    return (
        <DemoWrapper className='control'>
            <button onClick={e => toggleClickHandle(false)}>上一个</button>
            <button onClick={e => toggleClickHandle(true)}>下一个</button>

            <div className="list">
                <Indicator selectIndex={selectIndex}>
                    {
                        names.map((item, index) => {
                            return <button className={classnames({ active: (index === selectIndex) })} key={item} > {item}</button>
                        })
                    }
                </Indicator>
            </div>
        </DemoWrapper >
    )
})

export default Demo