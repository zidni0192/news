import React from 'react'
import { BASE_URL_IMAGE } from '../constant/environtment'
import { handleBookmark } from '../utils/locastorage'

export default function CardItem({ item }) {
    const onClick = (url) => {
        window.open(url, '_blank')
    }
    return (
        <div key={item.id} style={{ width: 'calc(25% - 10px)', marginRight: 10, marginBottom: 10, display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <img src="https://cdn.iconscout.com/icon/free/png-256/bookmark-1773018-1508960.png" style={{ position: 'absolute', width: 30, height: 30, backgroundColor: '#fff', cursor: 'pointer' }} onClick={() => handleBookmark(item.id, item)} />
            <div style={{ padding: '25% 50%', backgroundImage: item.thumbnail.type === "IMAGE" ? `url(${BASE_URL_IMAGE}/${item.thumbnail?.hash})` : 'url(https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png)', backgroundSize: 'cover', backgroundPosition: 'center', cursor: "pointer" }} onClick={() => onClick(item.url.url)} />
            <h3 style={{ fontSize: 12, fontFamily: 'sans-serif', cursor: 'pointer' }} onClick={() => onClick(item.url.url)}>{item.title}</h3>
        </div>)
}
