import { fetchRoomListAction } from '@/store/modules/entire'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { EntiresWrapper } from './style'

const Entires = memo(() => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRoomListAction(0));
    }, [dispatch])
    return (
        <EntiresWrapper>
            <EntireFilter />
            <EntireRooms />
            <EntirePagination />
        </EntiresWrapper>
    )
})

export default Entires