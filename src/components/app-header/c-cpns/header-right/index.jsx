import IconGlobal from '@/assets/svg/icon-global'
import IconProfileAvatar from '@/assets/svg/icon-profile-avatar'
import IconProfileMenu from '@/assets/svg/icon-profile-menu'
import React, { memo, useState, useEffect } from 'react'
import RightWrapper from './style'

const HeaderRight = memo(() => {
    const [showPannel, setShowPannel] = useState(false);

    // 执行副作用
    useEffect(() => {
        function windowHandleClick() {
            setShowPannel(false);
        }
        window.addEventListener("click", windowHandleClick,true)

        return () => {
            window.removeEventListener("click", windowHandleClick);
        }
    }, [])

    // 控制面板的打开
    function showPannelHandle() {
        setShowPannel(true);
    }

    return (
        <RightWrapper>
            <div className="btns">
                <span className='btn'>登录</span>
                <span className='btn'>注册</span>
                <span className="btn">
                    <IconGlobal />
                </span>
            </div>

            <div className="profiles" onClick={showPannelHandle}>
                <IconProfileMenu />
                <IconProfileAvatar />
                {
                    showPannel && (
                        <div className="pannel">
                            <div className="top">
                                <div className="item register">注册</div>
                                <div className="item login">登录</div>
                            </div>
                            <div className="bottom">
                                <div className="item">出租房源</div>
                                <div className="item">开展房源</div>
                                <div className="item">帮助</div>
                            </div>
                        </div>

                    )
                }
            </div>

        </RightWrapper>
    )
})

export default HeaderRight