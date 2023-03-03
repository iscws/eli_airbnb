import * as actionTypes from "./constants"

const initalState = {
    currentPage: 0,
    roomList: [],
    isLoading: false,
    totalCount: 0,
}

function reducer(state = initalState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case actionTypes.CHANGE_ROOM_LIST:
            return { ...state, roomList: action.roomList }
        case actionTypes.CHANGE_TOTAL_COUNT:
            return { ...state, totalCount: action.totalCount }
        case actionTypes.CHANGE_IS_LOADING:
            return { ...state, isLoading: action.isLoading }
        default:
            return state
    }
}

export default reducer