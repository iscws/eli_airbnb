import { getEntireRoomList } from "@/services/modules/entire"
import * as actionTypes from "./constants"

export const changeCurrentPageAction = (currentPage) => ({
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
})
export const changeRoomListAction = (roomList) => ({
    type: actionTypes.CHANGE_ROOM_LIST,
    roomList
})
export const changeTotalCountAction = (totalCount) => ({
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount
})
export const changeIsLoadingAction = (isLoading) => ({
    type: actionTypes.CHANGE_IS_LOADING,
    isLoading
})

export const fetchRoomListAction = (page = 0) => {
    // 新的函数
    return async (dispatch, getState) => {
        // 设置isLoading
        await dispatch(changeIsLoadingAction(true))
        const res = await getEntireRoomList(page * 20)
        await dispatch(changeIsLoadingAction(false))
        // 保存数据
        dispatch(changeCurrentPageAction(page))
        dispatch(changeTotalCountAction(res.totalCount))
        dispatch(changeRoomListAction(res.list))
    }
}