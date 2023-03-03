import hyrequest from "..";

export function getEntireRoomList(offset, size = 20) {
    return hyrequest.get({
        url: "/entire/list",
        params: {
            offset,
            size
        }
    })
}
