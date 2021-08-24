import React from 'react'
import CardItem from './cardItem';

export default function CardWrapper({ headerTitle, data }) {
    return (
        <div >
            <h2>{headerTitle}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {data.map(item => (
                    <CardItem item={item} key={item.id} />
                ))}
            </div>
            {!data || data.length <= 0 ?
                <div>
                    Tidak Ada Data
                </div>
                : null
            }
        </div >
    )
}
