import React, { useState } from 'react'
import { withNewsConsumer } from '../../context/news'
import CardWrapper from '../../component/cardWrapper'
import { withRouter } from 'react-router-dom'
export function Home({ categories, history }) {
    const [index, setIndex] = useState(0)
    const { templates } = (categories && categories[index]) || {}
    return (
        templates ? templates.map(item => (
            item.type === 6 ?
                (
                    <div key={item.id}>
                        <div style={{ cursor: 'pointer', position: 'absolute', right: 0, padding: 10, fontSize: 20, color: "#00f", fontWeight: 700 }} onClick={() => history.push('/bookmarked')}>
                            Bookmarked
                        </div>
                        <CardWrapper headerTitle={item.meta.categoryName || item.meta.personalizedTitle} data={item.sections[0].articles}>
                        </CardWrapper>
                    </div>
                )
                : null
        ))
            : null
    )
}

export default withRouter(withNewsConsumer(Home))