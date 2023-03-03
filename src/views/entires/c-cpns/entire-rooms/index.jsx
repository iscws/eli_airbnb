import RoomItem from '@/components/room-item'
import { changeDetailInfoActon } from '@/store/detail'
import React, { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoomsWrapper } from './style'

const EntireRooms = memo(() => {

    const { roomList, isLoading } = useSelector((state) => ({
        roomList: state.entire.roomList,
        isLoading: state.entire.isLoading,
    }))

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const itemClickHandle = useCallback((item) => {
        navigate("/detail");
        dispatch(changeDetailInfoActon(item))
    }, [navigate, dispatch])


    return (
        <RoomsWrapper>
            <div className='list'>
                {
                    roomList?.map((item, index) => {
                        return (
                            <RoomItem
                                itemData={item}
                                itemWidth="20%"
                                key={item._id}
                                itemClickHandle={itemClickHandle}
                            />
                        )
                    })
                }
            </div>
            {isLoading && <div className="cover"></div>}


        </RoomsWrapper>
    )
})

export default EntireRooms