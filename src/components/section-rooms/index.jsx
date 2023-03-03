import PropTypes from 'prop-types'
import React, { memo } from 'react'

import RoomItem from '../room-item'
import { RoomListWrapper } from './style'

const SectionRooms = memo((props) => {
  const { roomList = [], itemWidth } = props
  return (
    <RoomListWrapper className='room-list'>
      {
        roomList?.slice(0, 8).map((item) => {
          return <RoomItem key={item.id} itemData={item} itemWidth={itemWidth} />
        })
      }
    </RoomListWrapper>

  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array,
}

export default SectionRooms