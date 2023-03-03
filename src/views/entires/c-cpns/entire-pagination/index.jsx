import React, { memo } from 'react'
import { Pagination } from '@mui/material'
import { PaginationWrapper } from './style'
import {  useSelector, useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire'


const EntirePagination = memo(() => {
    const { currentPage, totalCount, roomList } = useSelector((state) => ({
        totalCount: state.entire.totalCount,
        currentPage: state.entire.currentPage,
        roomList: state.entire.roomList,
    }))

    const count = Math.ceil(totalCount / 20)
    const start = currentPage * 20 + 1
    const end = (currentPage + 1) * 20

    const dispatch = useDispatch()
    function pageChangeHandle(event, newPage) {
        window.scrollTo(0, 0)
        dispatch(fetchRoomListAction(newPage - 1))
    }

    return (
        <PaginationWrapper>
            {
                !!roomList.length && (
                    <div className='page-info'>
                        <Pagination count={count} onChange={pageChangeHandle} />
                        <div className='info'>
                            第 {start} - {end} 个房源, 共超过 {totalCount} 个
                        </div>
                    </div>
                )
            }
        </PaginationWrapper>
    )
})

export default EntirePagination