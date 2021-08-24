import React, { useEffect, useState } from 'react'
import CardWrapper from '../../component/cardWrapper'

export default function Bookmarked() {
    const [bookmarked, setBookmarked] = useState([])
    const getBookmarked = () => {
        let temp = []
        let result = localStorage.getItem('bookmarked')
        if (result) {
            result = JSON.parse(result)
            Object.keys(result).map(item => { temp.push(result[item]) })
        } else {
            result = {}
            temp = []
        }

        setBookmarked(temp)
    }
    useEffect(() => {
        getBookmarked()
    }, [])
    return (
        <CardWrapper headerTitle={"Bookmarked"} data={bookmarked}>
        </CardWrapper>
    )
}
