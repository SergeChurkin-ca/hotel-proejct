import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomList from './RoomList'
import { RoomConsumer } from '../context';
import Loading from './Loading';

export default function RoomsContainer() {
    return (
        <RoomConsumer>
            {
                (value) => {
                    const { loading, sortedRooms, rooms } = value
                    if (loading) {
                        return (
                                <Loading/>
                            )
                        }
                    return (
                        <div>
                            Hello from rooms container
                            <RoomsFilter rooms={rooms}/>
                            <RoomList rooms={sortedRooms}/>
                        </div>
                    )
                }
            }
        </RoomConsumer>
    )
}