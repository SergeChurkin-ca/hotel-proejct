import React from 'react';
import Room from './Room';

export default function RoomList({ rooms }) {
    if (rooms.length === 0) {
        return (
            <div className="empty-seacrh">
                <h3>unfortunately no rooms match your search parameters</h3>
            </div>
        )
    }
    return (
        <section className="rooms-list">
            <div className="rooms-list-center">
                {
                    rooms.map(item => {
                        return <Room key={item.id} room={item}/>
                    })
                }
            </div>
       </section>
    )
}
